import {getPostgresDatabaseManager} from "~/common--database-manager--postgres/postgresDatabaseManager.server";
import type {Media} from "~/sammaan-capital-common-typescript/typeDefinitions";
import {mediaRowValidator} from "~/sammaan-capital-common-typescript/utilities/zodValidationPatterns";
import {okResult} from "~/sammaan-capital-common-typescript/utilities/errorHandling";

export async function getAllMedia() {
    const postgresDatabaseManager = await getPostgresDatabaseManager(null);
    if (postgresDatabaseManager instanceof Error) {
        return postgresDatabaseManager;
    }

    const lead = await postgresDatabaseManager.execute(
        `
            SELECT
                *
            FROM
                media_library
            ORDER BY
                created_at DESC
        `,
    );

    // console.log("blogs>>>>>", lead.rows)

    if (lead instanceof Error) {
        console.log('lead error', lead);
        return lead;
    }

    if (lead.rowCount == 0) {
        return okResult(null);
    }

    return okResult(lead.rows.map((row) => rowToMedia(row)));
}

export function rowToMedia(row: unknown): Media {
    const media: Media = mediaRowValidator.parse(row);

    return media;
}