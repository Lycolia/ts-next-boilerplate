import styles from './index.module.scss';

type ExampleProps = {
  bgColor: 'red' | 'cyan' | 'blue';
  text: string;
  onClick: () => void;
};

export const Example = (props: ExampleProps) => {
  return (
    <span className={styles[props.bgColor]} onClick={props.onClick}>
      {props.text}
    </span>
  );
};
