import cx from './cx';
import data from './data';
import VanillaWrapper from '../vanillaWrapper';

const itemBuilder = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const $li = document.createElement('li');
  $li.classList.add(cx('item'), cx('item3'));
  $li.setAttribute('data-id', id);

  const $tab = document.createElement('div');
  $tab.classList.add(cx('tab'));
  $tab.textContent = title;

  const $description = document.createElement('div');
  $description.classList.add(cx('description'));
  $description.textContent = description;

  $li.append($tab, $description);
  return $li;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = data[0].id;

  const $ul = document.createElement('ul');
  $ul.classList.add(cx('container'));

  const handleClick = (e: Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;

    const targetId = $el.parentElement?.dataset.id;
    if (!targetId) return;

    currentId = targetId === currentId ? null : targetId;

    $items.map((item) => item.classList.toggle(cx('current'), currentId === item.dataset.id));
  };

  $ul.addEventListener('click', handleClick);

  const $items = data.map(itemBuilder);
  $ul.append(...$items);

  wrapper.append($ul);
};

const Accordion4V = () => <VanillaWrapper title="#4" initiator={initiator} />;
export default Accordion4V;
