import tLoader from '@multilanguage/helpers/tLoader';
import useTranslate from '@multilanguage/useTranslate'; 
import { XIcon, SearchIcon, RefreshIcon, PlusIcon } from '@heroicons/react/outline';
import { Alert, useDrawer, Button, FormControl, Radio, Input } from 'leemons-ui';
import ListTable2 from '@families/components/wip-ui/pages/search-list-table-radio';

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
        <section className=" w-full max-w-3xl">
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
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.3643 14.25V20.25"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3643 17.25H20.3643"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8963 10.5132C9.78323 9.53155 8.34831 8.9931 6.86426 9.00018C5.39476 8.98866 3.97214 9.51684 2.86619 10.4845C1.76025 11.4522 1.04791 12.7922 0.864258 14.2502"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.48926 4.125C3.48926 5.02011 3.84484 5.87855 4.47777 6.51149C5.11071 7.14442 5.96915 7.5 6.86426 7.5C7.75936 7.5 8.61781 7.14442 9.25074 6.51149C9.88368 5.87855 10.2393 5.02011 10.2393 4.125C10.2393 3.22989 9.88368 2.37145 9.25074 1.73851C8.61781 1.10558 7.75936 0.75 6.86426 0.75C5.96915 0.75 5.11071 1.10558 4.47777 1.73851C3.84484 2.37145 3.48926 3.22989 3.48926 4.125V4.125Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9893 3.375C13.9893 4.07119 14.2658 4.73887 14.7581 5.23116C15.2504 5.72344 15.9181 6 16.6143 6C17.3105 6 17.9781 5.72344 18.4704 5.23116C18.9627 4.73887 19.2393 4.07119 19.2393 3.375C19.2393 2.67881 18.9627 2.01113 18.4704 1.51884C17.9781 1.02656 17.3105 0.75 16.6143 0.75C15.9181 0.75 15.2504 1.02656 14.7581 1.51884C14.2658 2.01113 13.9893 2.67881 13.9893 3.375V3.375Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5143 8.9999C20.1562 8.38019 19.6556 7.85481 19.0538 7.46738C18.4521 7.07994 17.7666 6.84162 17.0543 6.7722C16.342 6.70278 15.6234 6.80425 14.9581 7.06821C14.2929 7.33216 13.7002 7.75098 13.2293 8.2899"
                stroke="currentColor"
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

          <h2 className="text-secondary text-xl mt-3 mb-6">{t('title')}</h2>
          <fileset className="my-4">
            <legend className=" font-medium mb-8">{t('action_title')}</legend>
            <div className="icon-options-group w-full max-w-3xl">
              <div className="icon-option">
                <input className="" type="radio" name="options2" id="option1b" data-title="1" />
                <label for="option1b">
                  {/* TODO Librería de iconos */}
                  <svg
                    className="ico-op"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M22.3076 7.5C22.3076 8.56087 22.729 9.57828 23.4792 10.3284C24.2293 11.0786 25.2468 11.5 26.3076 11.5C27.3685 11.5 28.3859 11.0786 29.136 10.3284C29.8862 9.57828 30.3076 8.56087 30.3076 7.5C30.3076 6.43913 29.8862 5.42172 29.136 4.67157C28.3859 3.92143 27.3685 3.5 26.3076 3.5C25.2468 3.5 24.2293 3.92143 23.4792 4.67157C22.729 5.42172 22.3076 6.43913 22.3076 7.5V7.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.057 27.5L24.3076 29.5H28.3076L29.3076 21.5H31.3076V18.5C31.3076 17.5714 31.049 16.6612 30.5609 15.8713C30.0727 15.0815 29.3742 14.4431 28.5437 14.0279C27.7132 13.6126 26.7834 13.4368 25.8586 13.5202C24.9338 13.6036 24.0505 13.9429 23.3076 14.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.30762 7.5C2.30762 8.56087 2.72904 9.57828 3.47919 10.3284C4.22934 11.0786 5.24675 11.5 6.30762 11.5C7.36848 11.5 8.3859 11.0786 9.13604 10.3284C9.88619 9.57828 10.3076 8.56087 10.3076 7.5C10.3076 6.43913 9.88619 5.42172 9.13604 4.67157C8.3859 3.92143 7.36848 3.5 6.30762 3.5C5.24675 3.5 4.22934 3.92143 3.47919 4.67157C2.72904 5.42172 2.30762 6.43913 2.30762 7.5V7.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.55828 27.5L8.30762 29.5H4.30762L3.30762 21.5H1.30762V18.5C1.30762 17.5714 1.56619 16.6612 2.05436 15.8713C2.54254 15.0815 3.24102 14.4431 4.07155 14.0279C4.90208 13.6126 5.83184 13.4368 6.75665 13.5202C7.68145 13.6036 8.56477 13.9429 9.30762 14.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3076 12.5C13.3076 13.2956 13.6237 14.0587 14.1863 14.6213C14.7489 15.1839 15.512 15.5 16.3076 15.5C17.1033 15.5 17.8663 15.1839 18.4289 14.6213C18.9915 14.0587 19.3076 13.2956 19.3076 12.5C19.3076 11.7044 18.9915 10.9413 18.4289 10.3787C17.8663 9.81607 17.1033 9.5 16.3076 9.5C15.512 9.5 14.7489 9.81607 14.1863 10.3787C13.6237 10.9413 13.3076 11.7044 13.3076 12.5V12.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.3076 17.5C14.9815 17.5 13.7098 18.0268 12.7721 18.9645C11.8344 19.9021 11.3076 21.1739 11.3076 22.5V23.5H13.3076L14.3076 29.5H16.3076"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.3076 17.5C17.6337 17.5 18.9055 18.0268 19.8432 18.9645C20.7808 19.9021 21.3076 21.1739 21.3076 22.5V23.5H19.3076L18.3076 29.5H16.3076"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.307617 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{t('selection_01')}</span>
                </label>
              </div>
              <div className="icon-option">
                <input className="" type="radio" name="options2" id="option2b" data-title="2" />
                <label for="option2b">
                  {/* TODO Librería de iconos */}
                  <svg
                    className="ico-op"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M22.0983 20.1L13.257 23.616L22.1463 26.7533C22.4336 26.8548 22.747 26.8548 23.0343 26.7533L31.085 23.912C31.1489 23.8893 31.2044 23.8477 31.2441 23.7927C31.2838 23.7377 31.3058 23.6719 31.3071 23.6041C31.3084 23.5363 31.289 23.4697 31.2514 23.4132C31.2139 23.3567 31.16 23.313 31.097 23.288L23.0823 20.1C22.7663 19.9745 22.4143 19.9745 22.0983 20.1Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.257 23.6162V28.5002"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.257 25.0332V29.2332C17.2559 29.434 17.3153 29.6305 17.4276 29.797C17.5399 29.9635 17.6997 30.0923 17.8863 30.1665L22.2196 31.7665C22.4579 31.8626 22.7241 31.8626 22.9623 31.7665L27.2956 30.1665C27.4819 30.0919 27.6413 29.963 27.7533 29.7965C27.8653 29.6301 27.9247 29.4338 27.9236 29.2332V25.0332"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.92358 6.83366C4.92358 8.33655 5.52061 9.77789 6.58331 10.8406C7.64602 11.9033 9.08736 12.5003 10.5903 12.5003C12.0931 12.5003 13.5345 11.9033 14.5972 10.8406C15.6599 9.77789 16.2569 8.33655 16.2569 6.83366C16.2569 5.33077 15.6599 3.88943 14.5972 2.82672C13.5345 1.76401 12.0931 1.16699 10.5903 1.16699C9.08736 1.16699 7.64602 1.76401 6.58331 2.82672C5.52061 3.88943 4.92358 5.33077 4.92358 6.83366V6.83366Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.25696 23.8335C1.25693 21.9182 1.84617 20.0492 2.94471 18.4802C4.04326 16.9112 5.59792 15.7182 7.39773 15.063C9.19753 14.4078 11.1553 14.3223 13.0054 14.8179C14.8555 15.3135 16.5084 16.3663 17.7396 17.8335"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.307617 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{t('selection_02')}</span>
                </label>
              </div>
            </div>
            <ul className="my-6 flex gap-4">
              <li>
                <FormControl label={t('radio_01')} labelPosition="right">
                  <Radio name="opt" />
                </FormControl>
              </li>
              <li>
                <FormControl label={t('radio_02')} labelPosition="right">
                  <Radio name="opt" />
                </FormControl>
              </li>
              <li>
                <FormControl label={t('radio_03')} labelPosition="right">
                  <Radio name="opt" />
                </FormControl>
              </li>
              <li>
                <FormControl label={t('radio_04')} labelPosition="right">
                  <Radio name="opt" />
                </FormControl>
              </li>
            </ul>
            <div className="flex gap-2">
              <FormControl className="w-full">
                <Input outlined={true}></Input>
              </FormControl>
              <Button color="primary">
                {' '}
                <SearchIcon className="inline-block w-4 h-4 mr-2" />
                {t('btn_search')}
              </Button>
            </div>
            <Alert color="error" className=" border border-solid border-red-200 bg-red-100 my-6">
              <div className="flex-1 items-center">
                <XIcon className="w-6 h-6 mx-2 stroke-current" />
                <label className=" font-inter text-xs text-secondary ">{t('error_search')}</label>
              </div>
            </Alert>
          </fileset>

          {/* RESULTADOS  */}
          <Button color="primary" text={true} className="block whitespace-nowrap">
            <RefreshIcon className="inline-block w-4 h-4 mr-2" />
            {t('btn_search_again')}
          </Button>
          <div className="flex flex-col w-full relative bg-gray-10 p-6 mb-12">
            <div>
              <h3 className=" text-base text-center font-medium text-secondary-300 mb-2">
                {t('results_title')}{' '}
                <strong className=" text-secondary-600"> 2 estudiantes </strong>
                {t('results_by_name')}
                <strong className=" text-secondary-600">Ana</strong>
                {t('results_by_birthdate')}
                <strong className=" text-secondary-600">09/04/2010</strong>
              </h3>
              <p className="text-center text-secondary-300 text-sm mb-8">{t('results_description')}</p>
            </div>
            <div>
              <Button color="primary" className="mr-4 inline-block">
                <PlusIcon className="inline-block w-4 h-4 mr-2" />
                {t('btn_add_01')}
              </Button>
            </div>
            <ListTable2></ListTable2>
          </div>
        </section>
      </div>
    </>
  );
}
