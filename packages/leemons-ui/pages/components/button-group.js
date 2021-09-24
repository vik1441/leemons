import React from 'react';
import { DotsHorizontalIcon, PencilIcon } from '@heroicons/react/outline';
import { Button, Divider } from '../../src/components/ui';
import ClassTable from '../../src/components/ClassTable';
import Wrapper from '../../src/components/Wrapper';

function ButtonGroupPage() {
  const data = {
    showType: true,
    components: [{ class: 'btn-group', desc: 'Container for grouping multiple buttons' }],
  };

  return (
    <main>
      <h2 className="mt-2 mb-6 text-5xl font-bold">
        <span className="text-primary">Button Group</span>
      </h2>
      <div className="flex-grow p-4">
        <div className="text-xl font-bold">Examples</div>

        <Wrapper title="button group">
          <div className="flex items-start flex-col space-y-2">
            <div className="btn-group">
              <Button className="btn-lg btn-active" disabled>
                Large
              </Button>
              <Button className="btn-lg">Large</Button>
              <Button className="btn-lg">Large</Button>
              <Button className="btn-lg">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
            <div className="btn-group">
              <Button className="btn-active">Normal</Button>
              <Button>Normal</Button>
              <Button>Normal</Button>
              <Button>
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
            <div className="btn-group">
              <Button className="btn-sm btn-active" disabled>
                Small
              </Button>
              <Button className="btn-sm">Small</Button>
              <Button className="btn-sm">Small</Button>
              <Button className="btn-sm">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
            <div className="btn-group">
              <Button className="btn-xs btn-active" disabled>
                Tiny
              </Button>
              <Button className="btn-xs">Tiny</Button>
              <Button className="btn-xs">Tiny</Button>
              <Button className="btn-xs">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
          </div>
        </Wrapper>

        <Wrapper title="button group outline">
          <div className="flex items-start flex-col space-y-2">
            <div className="btn-group">
              <Button outlined className="btn-lg btn-active" disabled>
                Large
              </Button>
              <Button outlined color="primary" className="btn-lg">
                Large
              </Button>
              <Button outlined color="primary" className="btn-lg">
                Large
              </Button>
              <Button outlined color="primary" className="btn-lg">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
            <div className="btn-group">
              <Button outlined className="btn-active" disabled>
                Normal
              </Button>
              <Button outlined color="primary">
                Normal
              </Button>
              <Button outlined color="primary">
                Normal
              </Button>
              <Button outlined color="primary">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
            <div className="btn-group">
              <Button outlined className="btn-sm btn-active" disabled>
                Small
              </Button>
              <Button outlined color="primary" className="btn-sm">
                Small
              </Button>
              <Button outlined color="primary" className="btn-sm">
                Small
              </Button>
              <Button outlined color="primary" className="btn-sm">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
            <div className="btn-group">
              <Button outlined className="btn-xs btn-active" disabled>
                Tiny
              </Button>
              <Button outlined color="primary" className="btn-xs">
                Tiny
              </Button>
              <Button outlined color="primary" className="btn-xs">
                Tiny
              </Button>
              <Button outlined color="primary" className="btn-xs">
                <DotsHorizontalIcon className="inline-block w-4 stroke-current" />
              </Button>
            </div>
          </div>
        </Wrapper>

        <Wrapper
          className="flex items-start flex-col space-y-2"
          title="button group with radio buttons"
        >
          <div className="btn-group">
            <input className="btn" type="radio" name="options" id="option1" data-title="1" />
            <input className="btn" type="radio" name="options" id="option2" data-title="2" />
            <input className="btn" type="radio" name="options" id="option3" data-title="3" />
            <input className="btn" type="radio" name="options" id="option4" data-title="4" />
            <input className="btn" type="radio" name="options" id="option5" data-title="5" />
          </div>
        </Wrapper>

        <Wrapper
          className="flex items-start flex-col space-y-2"
          title="Icon option group with radio buttons"
        >
          <div className="icon-options-group">
            <div className="icon-option">
              <input
                className=""
                type="radio"
                name="options2"
                id="option1b"
                data-title="1"
              />
              <label for="option1b">
              {/* TODO Librería de iconos */}
              <svg
                className="ico-op"
                width="32"
                height="32"
                viewBox="0 0 32 32"
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
                    <rect width="32" height="32" fill="white" transform="translate(0.307617 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Add element</span>
            </label>
            </div>
          <div className="icon-option">
            <input
              className=""
              type="radio"
              name="options2"
              id="option2b"
              data-title="2"
            />
            <label for="option2b">
              <PencilIcon className="ico-op"></PencilIcon>
              <span>Add element</span>
            </label>
          </div>
          </div>
        </Wrapper>

        <Divider className="my-6" />
        <ClassTable data={data} />
      </div>
    </main>
  );
}

export default ButtonGroupPage;
