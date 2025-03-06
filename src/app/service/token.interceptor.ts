import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
   
  const token =   localStorage.getItem('27Token');

  const newReq =  req.clone({
    setHeaders:{'Authorization': 'bearer '+token+''}
  })
  return next(newReq);
};
