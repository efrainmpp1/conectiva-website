const useMock = !import.meta.env.PROD;

export * from (useMock ? './mock' : './integration');
