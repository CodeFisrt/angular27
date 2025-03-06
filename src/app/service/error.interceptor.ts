import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse)=>{
      
      if(error.status === 500) {
        alert("API Error")
      } else if(error.status === 400) {
        alert("Invalid Body- Check your Payload")
      } else if (error.status ==401) {
        alert("UnAuthorized Please Login to get Api Resposne")
      }
      return throwError(()=>new Error(error.message));
    })
  );
};
