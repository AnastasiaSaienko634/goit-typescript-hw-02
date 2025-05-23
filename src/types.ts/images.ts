export type Photo = {
  id: number;
  url: string;
  title?: string;
  description?: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
};
