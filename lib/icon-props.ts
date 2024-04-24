import { RefAttributes, SVGProps } from 'react';

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
export type IconProps = RefAttributes<SVGSVGElement> & SVGAttributes;
