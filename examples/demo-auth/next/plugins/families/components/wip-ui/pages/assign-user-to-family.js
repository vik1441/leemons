import tLoader from '@multilanguage/helpers/tLoader';
import useTranslate from '@multilanguage/useTranslate'; 
import { XIcon, SearchIcon } from '@heroicons/react/outline';
import { useDrawer, Button, FormControl, Input, Label } from 'leemons-ui';

export default function AssingUsers() {
  const [translate] = useTranslate({
    keysStartsWith: 'plugins.families.assign_user_to_family',
  });
  const t = tLoader('plugins.families.assign_user_to_family', translate);
  console.log(translate);
    const [drawer, toggleDrawer] = useDrawer({
      animated: true,
      side: 'right',
    });

  return (
    <>
      <div className="p-6 relative">
        <Button
          className="btn-circle btn-xs ml-8 bg-transparent border-0 absolute top-1 right-1"
          onClick={toggleDrawer}
        >
          <XIcon className="inline-block w-4 h-4 stroke-current" />
        </Button>
        <section className=" w-full max-w-md">
          {/*TO DO LIBRERIA ICONOS PROPIA - No existe similar a este en HeroIcons */}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M11.3643 17.25C11.3643 18.8413 11.9964 20.3674 13.1216 21.4926C14.2468 22.6179 15.773 23.25 17.3643 23.25C18.9556 23.25 20.4817 22.6179 21.6069 21.4926C22.7321 20.3674 23.3643 18.8413 23.3643 17.25C23.3643 15.6587 22.7321 14.1326 21.6069 13.0074C20.4817 11.8821 18.9556 11.25 17.3643 11.25C15.773 11.25 14.2468 11.8821 13.1216 13.0074C11.9964 14.1326 11.3643 15.6587 11.3643 17.25Z"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.3643 14.25V20.25"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3643 17.25H20.3643"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8963 10.5132C9.78323 9.53155 8.34831 8.9931 6.86426 9.00018C5.39476 8.98866 3.97214 9.51684 2.86619 10.4845C1.76025 11.4522 1.04791 12.7922 0.864258 14.2502"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.48926 4.125C3.48926 5.02011 3.84484 5.87855 4.47777 6.51149C5.11071 7.14442 5.96915 7.5 6.86426 7.5C7.75936 7.5 8.61781 7.14442 9.25074 6.51149C9.88368 5.87855 10.2393 5.02011 10.2393 4.125C10.2393 3.22989 9.88368 2.37145 9.25074 1.73851C8.61781 1.10558 7.75936 0.75 6.86426 0.75C5.96915 0.75 5.11071 1.10558 4.47777 1.73851C3.84484 2.37145 3.48926 3.22989 3.48926 4.125V4.125Z"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9893 3.375C13.9893 4.07119 14.2658 4.73887 14.7581 5.23116C15.2504 5.72344 15.9181 6 16.6143 6C17.3105 6 17.9781 5.72344 18.4704 5.23116C18.9627 4.73887 19.2393 4.07119 19.2393 3.375C19.2393 2.67881 18.9627 2.01113 18.4704 1.51884C17.9781 1.02656 17.3105 0.75 16.6143 0.75C15.9181 0.75 15.2504 1.02656 14.7581 1.51884C14.2658 2.01113 13.9893 2.67881 13.9893 3.375V3.375Z"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5143 8.9999C20.1562 8.38019 19.6556 7.85481 19.0538 7.46738C18.4521 7.07994 17.7666 6.84162 17.0543 6.7722C16.342 6.70278 15.6234 6.80425 14.9581 7.06821C14.2929 7.33216 13.7002 7.75098 13.2293 8.2899"
                stroke="#8E97A3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" transform="translate(0.114258)" />
              </clipPath>
            </defs>
          </svg>

          <h2 className="text-secondary text-xl">{t('title')}</h2>
          <FormControl Label={t('action_title')} className="btn-group flex-row my-4">
            <input
              className="icon-option"
              type="radio"
              name="options"
              id="option1"
              data-title="{t('selection_01')}"
            />
            <input
              className="icon-option"
              type="radio"
              name="options"
              id="option2"
              data-title="{t('selection_01')}"
            />
          </FormControl>
        </section>
      </div>
    </>
  );
}
