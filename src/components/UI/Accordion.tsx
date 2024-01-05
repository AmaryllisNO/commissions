import { theme } from '@/pages/_app';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

type AccordionItem = {
  title: string;
  content: string;
};

const accordionItems: AccordionItem[] = [
  { title: 'Full Renders', content: 'Full Renders content...' },
  { title: 'Speedpaints', content: 'Speedpaints content...' },
  { title: 'Characters', content: 'Characters content...' },
  { title: 'Sketches', content: 'Sketches content...' },
];

const StyledAccordionItem = styled.div`
  border-bottom: 1px ${({ theme }) => theme.colors.lightFade} solid;
`;

const StyledAccordion = styled.div`
  background: ${({ theme }) => theme.colors.background};
  background: none;
`;

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionClasses: string = `accordion w-full max-w-xl ${
    activeIndex !== null ? 'fixed top-0 left-0' : ''
  }`;

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <CSSTransition
        in={activeIndex !== null}
        timeout={300}
        classNames={'accordion'}
      >
        <StyledAccordion className={accordionClasses}>
          {accordionItems.map((item, index) => (
            <StyledAccordionItem key={index}>
              <div
                className='p-4 cursor-pointer'
                onClick={() => toggleItem(index)}
              >
                <h3 className='text-base tracking-wide uppercase font-light'>
                  {item.title}
                </h3>
              </div>
              <CSSTransition
                in={activeIndex === index}
                timeout={150}
                classNames='accordionItem'
                unmountOnExit
              >
                <div className={`accordionItem-enter bg-zinc-800`}>
                  <div className='p-4 h-full'>
                    <p>{item.content}</p>
                  </div>
                </div>
              </CSSTransition>
            </StyledAccordionItem>
          ))}
        </StyledAccordion>
      </CSSTransition>
    </>
  );
};

export default Accordion;
