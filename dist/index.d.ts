import React, { HTMLAttributes } from 'react';

declare namespace Utility {
    function formatNumber(n: number | string): string;
    function formatRp(n: number | string): string;
    function generateRandomColorHex(): string;
    function simpleNumber(num: number): string;
}

interface AgendaCardProps {
    colorClass?: string;
    priority: string;
    title: string;
    datetime: string;
}
declare function AgendaCard(props: AgendaCardProps): React.JSX.Element;

interface SideOKRCardProps {
    title: string;
    badge?: JSX.Element;
    description: string;
    value: number;
    onSubmit?(): void;
}
declare function SideOKRCard(props: SideOKRCardProps): React.JSX.Element;

declare function NDNavbar(): React.JSX.Element;

interface NDNavbarOnboardingProps {
    activeIndex: number;
    onClose?(): void;
}
declare function NDNavbarOnboarding(props: NDNavbarOnboardingProps): React.JSX.Element;

type NDSidebarOptions = 'dashboard' | 'organization' | 'okr' | 'training-event' | 'library' | 'training-budget';
interface NDSidebarProps {
    active: NDSidebarOptions;
    onHover(sidebar: NDSidebarOptions): void;
}
declare function NDSidebar(props: NDSidebarProps): React.JSX.Element;

interface NDTemplateProps {
    active: NDSidebarOptions;
    children?: any;
}
declare function NDTemplate(props: NDTemplateProps): React.JSX.Element;

interface NDTemplateOnboardingProps extends HTMLAttributes<HTMLDivElement> {
    navbar: NDNavbarOnboardingProps;
    stickyRightChildren?: JSX.Element;
    children?: any;
}
declare function NDTemplateOnboarding(props: NDTemplateOnboardingProps): React.JSX.Element;

interface NDDashboardProps {
}
declare function NDDashboard(props: NDDashboardProps): React.JSX.Element;

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

export { AgendaCard, type LoginData, LoginPage, NDDashboard, NDNavbar, NDNavbarOnboarding, type NDNavbarOnboardingProps, NDSidebar, type NDSidebarOptions, NDTemplate, NDTemplateOnboarding, SideOKRCard, Utility };
