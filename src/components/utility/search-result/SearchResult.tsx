import Link from 'next/link';
import { type ISearchData } from '~/lib/search/types';

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex w-5/6 max-w-screen-md flex-col space-y-1 ${
        className ? className : ''
      } `}
    >
      <Link
        className="cursor:pointer hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        <p>{url}</p>
        <p className="text-xl text-blue-600 ">{title}</p>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
