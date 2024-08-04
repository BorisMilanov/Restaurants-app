import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    email: '',
    token: '',
    isAuthenticated: false,
    changeAuthState: () => null
});

export default AuthContext;
