// import * as zod from 'zod';

export const emailIdValidationPattern = "^.+@.+\\..+$";

export const phoneNumberValidationPattern = "^[0-9]{10}$";
export const indianPhoneNumberValidationPattern = "^[6-9]{1}[0-9]{9}$";
export const pinCodeValidationPattern = "^[1-9]{1}[0-9]{5}$";

export const websiteValidationPattern = "^.+\\..+$";

export const uuidValidationPattern = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
// export const zodUuid = zod.string().regex(new RegExp(uuidValidationPattern));

export const iso8601DateTimeValidationPattern = "^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$";
// export const zodIso8601DateTime = zod.string().regex(new RegExp(iso8601DateTimeValidationPattern));
