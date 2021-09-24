import tLoader from '@multilanguage/helpers/tLoader';
import useTranslate from '@multilanguage/useTranslate'; 
import { PlusCircleIcon,  TrashIcon } from '@heroicons/react/outline';
import { Avatar,Breadcrumbs, FormControl, Input, Button, Drawer, useDrawer, UserCard } from 'leemons-ui';
import DetailsUsers from '@families/components/wip-ui/pages/detail-user';
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
            <li>Family Details: López Vilches</li>
          </Breadcrumbs>
          <div className="flex w-full justify-between">
            <div className="relative w-full max-w-4xl">
              <FormControl>
                <Input outlined={true} placeholder={t('name.placeholder')}></Input>
              </FormControl>
              <span className=" bg-gray-10 py-1 px-2 font-inter text-secondary-300 rounded-sm absolute top-1 right-1">
                666356333
              </span>
            </div>
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
                <Button color="primary" text={true} className=" ">
                  <PlusCircleIcon className="inline-block w-4 h-4 mr-3" />
                  {t('tutor.btn_add')}
                </Button>
              </div>
              <ul className="list-user-card">
                <li className="">
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Antonia Hidalgo</strong>
                        <span className="block">Madre</span>
                      </div>
                    </div>

                    <Button square={true} className=" btn-xs bg-white hover:bg-gray-10 border-0">
                      <TrashIcon className="inline-block w-4 h-4 stroke-current" />
                    </Button>
                  </UserCard>
                </li>
                <li className="">
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Antonia Hidalgo</strong>
                        <span className="block">Madre</span>
                      </div>
                    </div>

                    <Button square={true} className=" btn-xs bg-white hover:bg-gray-10 border-0">
                      <TrashIcon className="inline-block w-4 h-4 stroke-current" />
                    </Button>
                  </UserCard>
                </li>
                <li className="">
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Antonia Hidalgo</strong>
                        <span className="block">Madre</span>
                      </div>
                    </div>

                    <Button square={true} className=" btn-xs bg-white hover:bg-gray-10 border-0">
                      <TrashIcon className="inline-block w-4 h-4 stroke-current" />
                    </Button>
                  </UserCard>
                </li>
              </ul>
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
              <ul className="list-user-card">
                <li className="">
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Mayte</strong>
                        <span className="block">López Vilches</span>
                      </div>
                    </div>
                    <div className="level inline-block font-inter text-center bg-gray-10 p-1 rounded-sm">
                      4ºC <small className="block">Primary</small>
                    </div>
                    <Button square={true} className=" btn-xs bg-white hover:bg-gray-10 border-0">
                      <TrashIcon className="inline-block w-4 h-4 stroke-current" />
                    </Button>
                  </UserCard>
                </li>
                <li className="">
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Antonia </strong>
                        <span className="block">López Vilches</span>
                      </div>
                    </div>
                    <div className="level inline-block font-inter text-center bg-gray-10 p-1 rounded-sm">
                      4ºC <small className="block">Primary</small>
                    </div>
                    <Button square={true} className=" btn-xs bg-white hover:bg-gray-10 border-0">
                      <TrashIcon className="inline-block w-4 h-4 stroke-current" />
                    </Button>
                  </UserCard>
                </li>
                <li className="">
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>María</strong>
                        <span className="block">López Vilches</span>
                      </div>
                    </div>
                    <div className="level inline-block font-inter text-center bg-gray-10 p-1 rounded-sm">
                      4ºC <small className="block">Primary</small>
                    </div>
                    <Button square={true} className=" btn-xs bg-white hover:bg-gray-10 border-0">
                      <TrashIcon className="inline-block w-4 h-4 stroke-current" />
                    </Button>
                  </UserCard>
                </li>
              </ul>
              Listado de la página view Family
              <ul className="list-user-card">
                <li className="" onClick={toggleDrawer}>
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Mayte</strong>
                        <span className="block">López Vilches</span>
                      </div>
                    </div>
                    <div className="level inline-block font-inter text-center bg-gray-10 p-1 rounded-sm">
                      4ºC <small className="block">Primary</small>
                    </div>
                  </UserCard>
                </li>
                <li className="" onClick={toggleDrawer}>
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>Antonia </strong>
                        <span className="block">López Vilches</span>
                      </div>
                    </div>
                    <div className="level inline-block font-inter text-center bg-gray-10 p-1 rounded-sm">
                      4ºC <small className="block">Primary</small>
                    </div>
                  </UserCard>
                </li>
                <li className="" onClick={toggleDrawer}>
                  <UserCard className="list-user-card-item">
                    <div className="user-basic-info">
                      <Avatar circle={true} size={8} className="">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                      </Avatar>
                      <div>
                        <strong>María</strong>
                        <span className="block">López Vilches</span>
                      </div>
                    </div>
                    <div className="level inline-block font-inter text-center bg-gray-10 p-1 rounded-sm">
                      4ºC <small className="block">Primary</small>
                    </div>
                  </UserCard>
                </li>
              </ul>
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
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <Drawer {...drawer}>
        <DetailsUsers></DetailsUsers>
      </Drawer>
    </>
  );
}
