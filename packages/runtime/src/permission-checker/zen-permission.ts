import { Prisma } from '@prisma/client';
import { PolicyCrudKind } from '@zenstackhq/runtime';
import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import camelcase from '@stdlib/string-camelcase';

export const ZenPermission = (
  model: Prisma.ModelName,
  operation: PolicyCrudKind,
) =>
  SetMetadata<string, ZenPermissionCheck>(METADATA_KEY, {
    model,
    operation,
  });

type ZenPermissionCheck = {
  model: Prisma.ModelName;
  operation: PolicyCrudKind;
};

const METADATA_KEY = 'zen:permission';

const getZenPermissionCheck = (
  reflector: Reflector,
  context: ExecutionContext,
) => reflector.get<ZenPermissionCheck>(METADATA_KEY, context.getHandler());

export const checkZenPermission = async <DbClient>(
  client: DbClient,
  reflector: Reflector,
  context: ExecutionContext,
): Promise<boolean> => {
  const check = getZenPermissionCheck(reflector, context);
  if (!check) {
    return true;
  }

  const { model, operation } = check;
  const delegate = (client as Record<string, unknown>)[camelcase(model)] as {
    check: (args: { operation: PolicyCrudKind }) => Promise<boolean>;
  };
  if (!delegate || !delegate.check) {
    throw new Error(
      `ZenPermissionCheck: ${model} does not have a check method.`,
    );
  }

  return await delegate.check({ operation });
};
