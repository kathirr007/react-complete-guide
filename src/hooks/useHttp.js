export const isDevBuild = process.env.NODE_ENV === 'development';
export const isProBuild = process.env.NODE_ENV === 'production';
export const baseUrl = isDevBuild ? 'http://localhost:3010' : 'https://react-forms-opinions-backend.vercel.app';
