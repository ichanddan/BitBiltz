const { ENVIRONMENT, NEXT_PUBLIC_API_URL } = process.env;

// Constant Values

const Config = {
  API_URL: NEXT_PUBLIC_API_URL,
  UNAUTHORIZED_EXCEPTION: false,
  ENVIRONMENT: ENVIRONMENT,
};

export default Config;
