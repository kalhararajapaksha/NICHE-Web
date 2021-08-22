import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import { Link } from 'gatsby';
import Stepcontext from '../../StepContext';


export const Modal2 = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div id="modal" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modalWrapper" showModal={showModal}>   
              <div className="modal-Content">
             <h1>Thank You For Join With Us...</h1>
              </div>
              <Link to="/sellwithus">
              <MdClose
                className="closeModalButton"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
              </Link>
          
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};