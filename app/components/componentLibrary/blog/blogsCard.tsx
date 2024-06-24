import {concatenateNonNullStringsWithSpaces} from "~/global-common-typescript/utilites/utilities";

export function BlogsCard({
  img,
  title,
  text,
  date,
  className
}: {
  img?: string;
  title: string;
  text: string;
  date: string;
  className?: string
}) {
  return (
    <div
      className={concatenateNonNullStringsWithSpaces("tw-grid tw-grid-cols-[8rem_minmax(0,1fr)] tw-gap-4 tw-rounded-lg tw-border tw-border-secondary-100 tw-bg-secondary-200", className? className : "")}
    >
      <div className="tw-col-start-1 tw-bg-[#001CA8] tw-rounded-l-lg"></div>
      <div className="tw-col-start-2 tw-grid tw-grid-rows-[auto_minmax(0,1fr)_auto] tw-py-2 tw-pr-4 tw-gap-2">
        <div className="sc-text-title1">{title}</div>
        <div className="sc-text-title2 tw-text-secondary-600">{text}</div>
        <div className="sc-text-caption tw-text-secondary-600">{date}</div>
      </div>
    </div>
  );
}
