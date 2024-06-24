import {z as zod} from "zod";
import type {Iso8601DateTime} from "~/common--type-definitions/typeDefinitions";
import {getUuidFromUnknown} from "~/global-common-typescript/utilities/typeValidationUtilities";

export const imageDetailsValidator = zod.object({
    width: zod.number(),
    height: zod.number(),
    blurHash: zod.string().optional(),
    altText: zod.string().optional(),
    title: zod.string().optional(),
    variants: zod.array(
        zod.object({
            width: zod.number(),
            height: zod.number(),
            extension: zod.string(),
            url: zod.string(),
        }),
    ),
});

export const mediaRowValidator = zod
    .object({
        id: zod.string().transform((str) => getUuidFromUnknown(str)),
        type: zod.string().transform((str) => getUuidFromUnknown(str)),
        role: zod.string().transform((str) => getUuidFromUnknown(str)),
        data: imageDetailsValidator,
        created_at: zod
            .date()
            .transform((date) => date.toISOString() as Iso8601DateTime),
        updated_at: zod
            .date()
            .transform((date) => date.toISOString() as Iso8601DateTime),
        name: zod.string(),
    })
    .transform((validatedRow) => ({
        id: validatedRow.id,
        type: validatedRow.type,
        createdAt: validatedRow.created_at,
        updatedAt: validatedRow.updated_at,
        role: validatedRow.role,
        data: validatedRow.data,
        name: validatedRow.name,
    }));