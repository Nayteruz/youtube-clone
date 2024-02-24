import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  Ref,
  RefObject,
  useEffect,
  useState,
} from "react";

interface IAnimatedDivProps<T> {
  state: boolean;
  delay: number;
  enterClass: string;
  exitClass: string;
  nodeRef: RefObject<T>;
  children: ReactNode;
}

interface IChildWithClassName extends React.HTMLAttributes<HTMLElement> {
  ref?: Ref<any>;
}

const WithAnimation: FC<IAnimatedDivProps<HTMLDivElement>> = ({
  state,
  delay,
  enterClass,
  exitClass,
  nodeRef,
  children,
}) => {
  const [animationClass, setAnimationClass] = useState("");
  const [show, setShow] = useState(state);

  useEffect(() => {
    if (state) {
      setShow(true);
      setTimeout(() => {
        nodeRef?.current?.classList.add(enterClass);
        nodeRef?.current?.classList.remove(exitClass);
        setAnimationClass(enterClass);
      });
    } else {
      nodeRef?.current?.classList.remove(enterClass);
      nodeRef?.current?.classList.add(exitClass);
      setAnimationClass(exitClass);
      const timeoutId = setTimeout(() => {
        nodeRef?.current?.classList.remove(exitClass);
        setAnimationClass("");
        setShow(false);
      }, delay - 100);

      return () => clearTimeout(timeoutId);
    }
  }, [state, delay, enterClass, exitClass, nodeRef]);

  const cloneChildrenWithRef = (children: ReactNode): ReactNode => {
    return Children.map(children, (child) => {
      if (isValidElement<IChildWithClassName>(child)) {
        if (child.props.ref === nodeRef) {
          return cloneElement(child, {
            className:
              `${child.props.className || ""} ${animationClass}`.trim(),
          });
        }

        return child;
      }
    });
  };

  return show ? <>{cloneChildrenWithRef(children)}</> : null;
};

export default WithAnimation;
