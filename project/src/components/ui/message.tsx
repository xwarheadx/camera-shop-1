import { MessageType } from '../../types/message';
import classes from './notification.module.css';

type MessageProps = {
  props: MessageType;
}

export default function Message({props}: MessageProps):JSX.Element {

  const [{title, message}] = [props];
  const cssClasses = `${classes.notification} ${classes.error}`;

  return (
    <section data-testid='error-test' className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}

