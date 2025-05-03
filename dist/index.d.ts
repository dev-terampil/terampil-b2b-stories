import React from 'react';

declare namespace Utility {
    function formatNumber(n: number | string): string;
    function formatRp(n: number | string): string;
    function generateRandomColorHex(): string;
    function simpleNumber(num: number): string;
}

interface LoginData {
    company_code: string;
    email: string;
    password: string;
}
interface LoginPageProps {
    forgotPasswordURL?: string;
    onSubmit(data: LoginData): void;
    error?: string;
    loading?: boolean;
}
declare function LoginPage(props: LoginPageProps): React.JSX.Element;

export { type LoginData, LoginPage, Utility };
