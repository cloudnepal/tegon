import type { IconProps } from './types';

export function CreateIssueLine({ size = 16, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.11695 1.99792H10.883C11.9751 1.99792 12.8406 1.99791 13.5382 2.05491C14.2516 2.1132 14.8552 2.23481 15.4064 2.51564C16.3002 2.97104 17.0268 3.69769 17.4822 4.59146C17.7631 5.14263 17.8847 5.74625 17.943 6.45964C18 7.15728 18 8.0228 18 9.11497L18 10.8852C18 11.9774 18 12.8428 17.943 13.5404C17.8847 14.2538 17.7631 14.8575 17.4823 15.4086C17.0269 16.3024 16.3002 17.0291 15.4064 17.4845C14.8553 17.7653 14.2516 17.8869 13.5382 17.9452C12.8406 18.0022 11.9751 18.0022 10.883 18.0022H9.11694C8.0248 18.0022 7.15931 18.0022 6.46169 17.9452C5.7483 17.8869 5.14467 17.7653 4.5935 17.4845C3.69973 17.0291 2.97307 16.3024 2.51767 15.4087C2.23684 14.8575 2.11523 14.2539 2.05694 13.5405C1.99994 12.8428 1.99995 11.9773 1.99995 10.8852V9.11492C1.99995 8.02278 1.99994 7.15728 2.05694 6.45966C2.11523 5.74627 2.23684 5.14264 2.51767 4.59147C2.97307 3.6977 3.69973 2.97104 4.5935 2.51564C5.14467 2.23481 5.7483 2.1132 6.46169 2.05491C7.15931 1.99791 8.02481 1.99792 9.11695 1.99792ZM6.58384 3.54993C5.96321 3.60064 5.57896 3.69702 5.27449 3.85215C4.66296 4.16374 4.16577 4.66093 3.85418 5.27246C3.69905 5.57693 3.60267 5.96118 3.55196 6.58181C3.50054 7.21119 3.49995 8.01544 3.49995 9.14792V10.8522C3.49995 11.9847 3.50054 12.7889 3.55196 13.4183C3.60267 14.0389 3.69905 14.4232 3.85418 14.7277C4.16577 15.3392 4.66296 15.8364 5.27449 16.148C5.57896 16.3031 5.96321 16.3995 6.58384 16.4502C7.21322 16.5016 8.01748 16.5022 9.14996 16.5022H10.85C11.9825 16.5022 12.7867 16.5016 13.4161 16.4502C14.0367 16.3995 14.421 16.3031 14.7255 16.148C15.337 15.8364 15.8342 15.3392 16.1458 14.7277C16.3009 14.4232 16.3973 14.0389 16.448 13.4183C16.4994 12.7889 16.5 11.9847 16.5 10.8522L16.5 9.1479C16.5 8.01543 16.4994 7.21117 16.4479 6.58179C16.3972 5.96117 16.3009 5.57692 16.1457 5.27245C15.8341 4.66092 15.3369 4.16374 14.7254 3.85215C14.4209 3.69702 14.0367 3.60064 13.4161 3.54993C12.7867 3.49851 11.9824 3.49793 10.85 3.49793H9.14995C8.01747 3.49793 7.21322 3.49851 6.58384 3.54993Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M10.0001 6.25006C10.4143 6.25006 10.7501 6.58585 10.7501 7.00006V9.25006H13C13.4142 9.25006 13.75 9.58585 13.75 10.0001C13.75 10.4143 13.4142 10.7501 13 10.7501H10.7501V13.0001C10.7501 13.4143 10.4143 13.7501 10.0001 13.7501C9.58584 13.7501 9.25006 13.4143 9.25006 13.0001V10.7501H7C6.58578 10.7501 6.25 10.4143 6.25 10.0001C6.25 9.58585 6.58578 9.25006 7 9.25006H9.25006V7.00006C9.25006 6.58585 9.58584 6.25006 10.0001 6.25006Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}