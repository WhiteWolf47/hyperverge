import { Box, SxProps } from '@mui/material';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  sx?: SxProps;
}

const Image = ({ src, alt, sx, ...rest }: ImageProps) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{ width: '70px', height: '70px', ...sx }}  // Ensure auto width and height if needed
    {...rest}
  />
);

export default Image;
