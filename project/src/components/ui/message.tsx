import { MessageType } from '../../types/message';
import classes from './notification.module.css';

type MessageProps = {
  props: MessageType;
}

export default function Message({props}: MessageProps):JSX.Element {

  const [{status, title, message}] = [props];

  let specialClasses = '';
  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}

