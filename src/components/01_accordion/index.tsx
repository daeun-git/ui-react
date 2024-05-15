import Accordion1 from './Accordion1';
import Accordion2 from './Accordion2';
import Accordion3 from './Accordion3';
import Accordion4V from './Accordion4V';
import Accordion5 from './Accordion5';
import Accordion6 from './Accordion6';
import Accordion7 from './Accordion7';
import Accordion8 from './Accordion8';
import cx from './cx';

const Accordions = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4V />
      <Accordion5 />
      <Accordion6 />
      <Accordion7 />
      <Accordion8 />
    </div>
  );
};

export default Accordions;
