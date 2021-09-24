import tLoader from '@multilanguage/helpers/tLoader';
import useTranslate from '@multilanguage/useTranslate'; 
import { XIcon, SearchIcon } from '@heroicons/react/outline';
import { PageContainer, Button, FormControl, Input, Radio } from 'leemons-ui';

export default function SearchResults() {
  const [translate] = useTranslate({
    keysStartsWith: 'plugins.classroom.class_list.view_panel.summary',
  });
  const t = tLoader('plugins.classroom.class_list.view_panel.summary', translate);
  console.log(translate);

  return (
    <>
      <PageContainer>
        <FormControl>
          <div className="relative">
            <Button className="btn-search  btn-xs absolute -left-1 top-2 hover:bg-transparent">
              <SearchIcon className={`w-5 h-5 transition color-base-300 `} />
            </Button>

            <Input
              ghost={true}
              placeholder="Find a family"
              className="bg-transparent input-search"
            />
            {/* si he realizado búsqueda botón para limpiar */}
            <Button className="btn-circle btn-xs ml-8 bg-transparent border-0">
              <XIcon className="inline-block w-4 h-4 stroke-current" />
            </Button>
          </div>
        </FormControl>
        <div class="p-4 mt-10">
          <h3 className="" aria-live="polite">
            Found <strong className="text-secondary">2 families</strong> with the name Pérez López
          </h3>
          <div className="bg-primary-content mt-4">
            <table role="table" class="w-full">
              <thead>
                <tr role="row" class="border-b border-base-300">
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Familia
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Número
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Teléfono
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Email contacto
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Tutor 1
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Tutor 2
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    class="text-xs weigth-semibold py-3 px-4 text-secondary text-left"
                  >
                    Estudiantes
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                <tr role="row" class="border-b border-base-300">
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">Perez Lopez</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">66635366</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">+34678890765</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">
                      <a class="text-sm text-primary" href="#">
                        debbie.baker@example.com
                      </a>
                    </div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">Pedro Perez</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">Ana López</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">2</div>
                  </td>
                </tr>

                <tr role="row" class="border-b border-base-300">
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">Perez Lopez</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">45635368</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">+34655890565</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">
                      <a class="text-sm text-primary" href="#">
                        debbie@example.com
                      </a>
                    </div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">Jaime Perez</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">María López</div>
                  </td>
                  <td role="cell" class="m-0 p-0">
                    <div class="text-sm py-3 px-4">3</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
