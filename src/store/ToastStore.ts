import { makeAutoObservable } from 'mobx';

class ToastStore {
  status: 'fail' | 'success' = 'success';

  message = '';

  time = 4000;

  isShow = false;

  showToast = (
    status: 'fail' | 'success' = 'success',
    message = '',
    time = 4000,
  ): void => {
    this.status = status;
    this.message = message;
    this.time = time;
    this.isShow = true;
  };

  hideToast = (): void => {
    this.isShow = false;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default ToastStore;
