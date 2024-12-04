import { cn } from '@/_lib/utils/cn-utility-function';

export type SuggestionProps = {
  data: { id: string; label: string }[];
  nameList: string;
  selectedItem: number;
  onSelect: (value: { id: string; label: string }) => void;
};

const Suggestions = ({
  data,
  nameList,
  selectedItem,
  onSelect,
}: SuggestionProps) => {
  const handleSelect = (el: { id: string; label: string }) => {
    onSelect(el);
  };

  return (
    <div role="menu" tabIndex={-1}>
      {data
        ? data?.map((el, index) => (
            <li
              key={`${nameList}-${el.id}`}
              className={cn(
                'flex border-t border-t-gray-950 w-full items-center h-10 px-4 hover:bg-primary-lavander-200 hover:text-white',
                selectedItem === index && 'bg-primary-lavander-600 text-white',
              )}
            >
              <button
                className=" flex justify-start items-center "
                type="button"
                onClick={() => handleSelect(el)}
              >
                {el.label}
              </button>
            </li>
          ))
        : null}
    </div>
  );
};

export default Suggestions;
