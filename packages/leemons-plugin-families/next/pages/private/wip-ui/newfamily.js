import tLoader from '@multilanguage/helpers/tLoader';
import useTranslate from '@multilanguage/useTranslate'; 
import { PlusCircleIcon, PlusIcon } from '@heroicons/react/outline';
import { Breadcrumbs, FormControl, Input, Button, Drawer, useDrawer } from 'leemons-ui';
import AssingUsers from '@families/components/wip-ui/pages/assign-user-to-family';
const data = {
  showType: true,
  components: [
    { class: 'drawer', desc: 'Container element' },
    { class: 'drawer-toggle', desc: 'For checkbox element that controls the drawer' },
    { class: 'drawer-content', desc: 'The content container' },
    { class: 'drawer-side', desc: 'The sidebar container' },
    { class: 'drawer-overlay', desc: 'The label covers the content when drawer is open' },
  ],
  utilities: [
    {
      class: 'drawer-mobile',
      desc: 'Makes drawer to open/close on mobile but will be always visible on desktop',
    },
    { class: 'drawer-end', desc: 'puts drawer to the right' },
  ],
};

export default function Newfamily() {
  const [translate] = useTranslate({
    keysStartsWith: 'plugins.families.new_family',
  });
  const t = tLoader('plugins.families.new_family', translate);
  console.log(translate);
    const [drawer, toggleDrawer] = useDrawer({
      animated: true,
      side: 'right',
    });

  return (
    <>
      <div className="bg-primary-content h-screen p-6 pb-12">
        <div className="w-full max-w-screen-xl  mb-8">
          <Breadcrumbs>
            <li>
              <a>Users</a>
            </li>
            <li>
              <a>Families</a>
            </li>
            <li>New Family</li>
          </Breadcrumbs>
          <div className="flex w-full justify-between">
            <FormControl className="w-full max-w-4xl">
              <Input outlined={true} placeholder={t('name.placeholder')}></Input>
            </FormControl>
            <div className="inline-flex">
              <Button color="primary" text={true}>
                {t('name.btn_cancel')}
              </Button>
              <Button color="primary">{t('name.btn_save')}</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex">
          <div className=" w-full max-w-xs py-8 px-6">
            <fieldset className="w-full items-center mb-4">
              <div className="flex items-center flex-nowrap">
                <legend className=" font-medium whitespace-nowrap mr-3">{t('tutor.title')}</legend>
                <Button color="primary" text={true} className=" " onClick={toggleDrawer}>
                  <PlusCircleIcon className="inline-block w-4 h-4 mr-3" />
                  {t('tutor.btn_add')}
                </Button>
              </div>
              <div className="empty-list-yet flex flex-col justify-center items-center p-10 mb-6 bg-gray-10 border border-solid border-gray-20">
                {/* TODO Librería de iconos */}
                <svg
                  className=" mb-2"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M22.3076 7.5C22.3076 8.56087 22.729 9.57828 23.4792 10.3284C24.2293 11.0786 25.2468 11.5 26.3076 11.5C27.3685 11.5 28.3859 11.0786 29.136 10.3284C29.8862 9.57828 30.3076 8.56087 30.3076 7.5C30.3076 6.43913 29.8862 5.42172 29.136 4.67157C28.3859 3.92143 27.3685 3.5 26.3076 3.5C25.2468 3.5 24.2293 3.92143 23.4792 4.67157C22.729 5.42172 22.3076 6.43913 22.3076 7.5V7.5Z"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.057 27.5L24.3076 29.5H28.3076L29.3076 21.5H31.3076V18.5C31.3076 17.5714 31.049 16.6612 30.5609 15.8713C30.0727 15.0815 29.3742 14.4431 28.5437 14.0279C27.7132 13.6126 26.7834 13.4368 25.8586 13.5202C24.9338 13.6036 24.0505 13.9429 23.3076 14.5"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.30762 7.5C2.30762 8.56087 2.72904 9.57828 3.47919 10.3284C4.22934 11.0786 5.24675 11.5 6.30762 11.5C7.36848 11.5 8.3859 11.0786 9.13604 10.3284C9.88619 9.57828 10.3076 8.56087 10.3076 7.5C10.3076 6.43913 9.88619 5.42172 9.13604 4.67157C8.3859 3.92143 7.36848 3.5 6.30762 3.5C5.24675 3.5 4.22934 3.92143 3.47919 4.67157C2.72904 5.42172 2.30762 6.43913 2.30762 7.5V7.5Z"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.55828 27.5L8.30762 29.5H4.30762L3.30762 21.5H1.30762V18.5C1.30762 17.5714 1.56619 16.6612 2.05436 15.8713C2.54254 15.0815 3.24102 14.4431 4.07155 14.0279C4.90208 13.6126 5.83184 13.4368 6.75665 13.5202C7.68145 13.6036 8.56477 13.9429 9.30762 14.5"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3076 12.5C13.3076 13.2956 13.6237 14.0587 14.1863 14.6213C14.7489 15.1839 15.512 15.5 16.3076 15.5C17.1033 15.5 17.8663 15.1839 18.4289 14.6213C18.9915 14.0587 19.3076 13.2956 19.3076 12.5C19.3076 11.7044 18.9915 10.9413 18.4289 10.3787C17.8663 9.81607 17.1033 9.5 16.3076 9.5C15.512 9.5 14.7489 9.81607 14.1863 10.3787C13.6237 10.9413 13.3076 11.7044 13.3076 12.5V12.5Z"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.3076 17.5C14.9815 17.5 13.7098 18.0268 12.7721 18.9645C11.8344 19.9021 11.3076 21.1739 11.3076 22.5V23.5H13.3076L14.3076 29.5H16.3076"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.3076 17.5C17.6337 17.5 18.9055 18.0268 19.8432 18.9645C20.7808 19.9021 21.3076 21.1739 21.3076 22.5V23.5H19.3076L18.3076 29.5H16.3076"
                      stroke="#8E97A3"
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
                <span className="block text-gray-50 text-xs mb-5">{t('tutor.msg_empty')}</span>
                <Button
                  outlined={true}
                  circle={true}
                  title={t('tutor.btn_add')}
                  className="btn-xs text-gray-50  hover:bg-gray-20 hover:border-gray-20"
                >
                  <PlusIcon className=" w-6 h-6 text-gray-50" />
                </Button>
              </div>
            </fieldset>
            <fieldset className="w-full items-center mb-4 ">
              <div className="flex items-center flex-nowrap">
                <legend className=" font-medium whitespace-nowrap mr-3">
                  {t('students.title')}
                </legend>
                <Button color="primary" text={true} className=" ">
                  <PlusCircleIcon className="inline-block w-4 h-4 mr-3" />
                  {t('students.btn_add')}
                </Button>
              </div>
              <div className="empty-list-yet flex flex-col justify-center items-center p-10  mb-6 bg-gray-10 border border-solid border-gray-20">
                {/* TODO Librería de iconos */}
                <svg
                  className=" mb-2"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M22.0983 20.1L13.257 23.616L22.1463 26.7533C22.4336 26.8548 22.747 26.8548 23.0343 26.7533L31.085 23.912C31.1489 23.8893 31.2044 23.8477 31.2441 23.7927C31.2838 23.7377 31.3058 23.6719 31.3071 23.6041C31.3084 23.5363 31.289 23.4697 31.2514 23.4132C31.2139 23.3567 31.16 23.313 31.097 23.288L23.0823 20.1C22.7663 19.9745 22.4143 19.9745 22.0983 20.1Z"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.257 23.6162V28.5002"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.257 25.0332V29.2332C17.2559 29.434 17.3153 29.6305 17.4276 29.797C17.5399 29.9635 17.6997 30.0923 17.8863 30.1665L22.2196 31.7665C22.4579 31.8626 22.7241 31.8626 22.9623 31.7665L27.2956 30.1665C27.4819 30.0919 27.6413 29.963 27.7533 29.7965C27.8653 29.6301 27.9247 29.4338 27.9236 29.2332V25.0332"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.92358 6.83366C4.92358 8.33655 5.52061 9.77789 6.58331 10.8406C7.64602 11.9033 9.08736 12.5003 10.5903 12.5003C12.0931 12.5003 13.5345 11.9033 14.5972 10.8406C15.6599 9.77789 16.2569 8.33655 16.2569 6.83366C16.2569 5.33077 15.6599 3.88943 14.5972 2.82672C13.5345 1.76401 12.0931 1.16699 10.5903 1.16699C9.08736 1.16699 7.64602 1.76401 6.58331 2.82672C5.52061 3.88943 4.92358 5.33077 4.92358 6.83366V6.83366Z"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.25696 23.8335C1.25693 21.9182 1.84617 20.0492 2.94471 18.4802C4.04326 16.9112 5.59792 15.7182 7.39773 15.063C9.19753 14.4078 11.1553 14.3223 13.0054 14.8179C14.8555 15.3135 16.5084 16.3663 17.7396 17.8335"
                      stroke="#8E97A3"
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

                <span className="block text-gray-50 text-xs mb-5">{t('students.msg_empty')}</span>
                <Button
                  outlined={true}
                  circle={true}
                  title={t('students.btn_add')}
                  className="btn-xs text-gray-50  hover:bg-gray-20 hover:border-gray-20"
                >
                  <PlusIcon className=" w-6 h-6 text-gray-50" />
                </Button>
              </div>
            </fieldset>
          </div>
          <div className=" w-full max-w-4xl ml-16">
            <div className="w-full py-8">
              <fieldset className="w-full items-center mb-4">
                <div className="flex items-center flex-nowrap">
                  <legend className=" font-medium whitespace-nowrap mr-3">
                    {t('emergency_numbers.title')}
                  </legend>
                  <Button color="primary" text={true} className=" ">
                    <PlusCircleIcon className="inline-block w-4 h-4 mr-3" />
                    {t('emergency_numbers.btn_add')}
                  </Button>
                  <span className="border-b border-solid border-gray-30 w-full h-1"></span>
                </div>
                <div className="empty-list-yet flex flex-col justify-center items-center p-10  mb-6 bg-gray-10 border border-solid border-gray-20">
                  {/* TODO Librería de iconos */}
                  <svg
                    className=" mb-2"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.3076 31H7.30762C6.51197 31 5.74891 30.6839 5.1863 30.1213C4.62369 29.5587 4.30762 28.7956 4.30762 28"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.30762 1C7.24675 1 6.22934 1.42143 5.47919 2.17157C4.72904 2.92172 4.30762 3.93913 4.30762 5V28C4.30762 27.2044 4.62369 26.4413 5.1863 25.8787C5.74891 25.3161 6.51197 25 7.30762 25H27.3076C27.5728 25 27.8272 24.8946 28.0147 24.7071C28.2023 24.5196 28.3076 24.2652 28.3076 24V2C28.3076 1.73478 28.2023 1.48043 28.0147 1.29289C27.8272 1.10536 27.5728 1 27.3076 1H8.30762Z"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.3076 31V25"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9716 18.2412L19.1863 15.0666C19.5613 14.6916 20.0699 14.481 20.6003 14.481C21.1306 14.481 21.6392 14.6916 22.0143 15.0666L22.7223 15.7746C23.0972 16.1496 23.3078 16.6582 23.3078 17.1886C23.3078 17.7189 23.0972 18.2275 22.7223 18.6025L22.1089 19.2159C21.8654 19.4615 21.5623 19.6397 21.2293 19.7332C20.8963 19.8267 20.5447 19.8322 20.2089 19.7492L19.0463 19.4585C16.8227 18.9034 14.7919 17.7541 13.1713 16.1335C11.5508 14.5129 10.4014 12.4821 9.84627 10.2585L9.56094 9.09855C9.47736 8.76353 9.48194 8.41258 9.57424 8.07986C9.66653 7.74714 9.84339 7.44398 10.0876 7.19988L10.7009 6.58655C11.076 6.21161 11.5846 6.00098 12.1149 6.00098C12.6453 6.00098 13.1539 6.21161 13.5289 6.58655L14.2369 7.29322C14.6119 7.66827 14.8225 8.17689 14.8225 8.70722C14.8225 9.23754 14.6119 9.74616 14.2369 10.1212L11.0556 13.3212"
                      stroke="#8E97A3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="block text-gray-50 text-xs mb-5">
                    {t('emergency_numbers.msg_empty')}
                  </span>
                  <Button
                    outlined={true}
                    circle={true}
                    title={t('emergency_numbers.btn_add')}
                    className="btn-xs text-gray-50  hover:bg-gray-20 hover:border-gray-20"
                  >
                    <PlusIcon className=" w-6 h-6 text-gray-50" />
                  </Button>
                </div>
              </fieldset>
              <fieldset className="w-full items-center mb-4">
                <div className="flex items-center flex-nowrap mb-4">
                  <legend className=" font-medium whitespace-nowrap mr-3">
                    {t('other_information.title')}
                  </legend>
                  <span className="border-b border-solid border-gray-30 w-full h-1"></span>
                </div>
                <FormControl
                  label={t('other_information.label_01')}
                  className="fc-h border-b border-solid border-gray-10 pb-2 mb-2"
                >
                  <Input outlined={true} className="w-full max-w-md" />
                </FormControl>
                <FormControl
                  label={t('other_information.label_02')}
                  className="fc-h border-b border-solid border-gray-10 pb-2 mb-2"
                >
                  <Input outlined={true} className="w-full max-w-md" />
                </FormControl>
                <FormControl
                  label={t('other_information.label_03')}
                  className="fc-h border-b border-solid border-gray-10 pb-2 mb-2"
                >
                  <Input outlined={true} className="w-full max-w-md" />
                </FormControl>
                <FormControl
                  label={t('other_information.label_04')}
                  className="fc-h border-b border-solid border-gray-10 pb-2 mb-2"
                >
                  <Input outlined={true} className="w-full max-w-md" />
                </FormControl>
                <FormControl label={t('other_information.label_05')} className="fc-h pb-2 mb-6">
                  <Input outlined={true} className="w-full max-w-md" />
                </FormControl>
              </fieldset>
              <fieldset className="w-full items-center mb-4">
                <div className="flex items-center flex-nowrap mb-4">
                  <legend className=" font-medium whitespace-nowrap mr-3">
                    {t('permissions.title')}
                  </legend>
                  <span className="border-b border-solid border-gray-30 w-full h-1"></span>
                </div>
                <p className=" font-inter text-secondary-200 text-sm">
                  {' '}
                  {t('permissions.description')}
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Drawer {...drawer}>
        <AssingUsers></AssingUsers>
      </Drawer>
    </>
  );
}
