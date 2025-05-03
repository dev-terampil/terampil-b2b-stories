import React, { HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

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

interface NDNavbarOnboardingOKRProps {
    onBack?(): void;
    onCancel?(): void;
    onSave?(): void;
}
declare function NDNavbarOnboardingOKR(props: NDNavbarOnboardingOKRProps): React.JSX.Element;

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

interface NDTemplateOnboardingOKRProps extends HTMLAttributes<HTMLDivElement> {
    navbar: NDNavbarOnboardingOKRProps;
    children?: any;
}
declare function NDTemplateOnboardingOKR(props: NDTemplateOnboardingOKRProps): React.JSX.Element;

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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    smaller?: boolean;
}
declare function Button(props: ButtonProps): React.JSX.Element;

interface DashboardInformationSummaryProps {
}
declare function DashboardInformationSummary(props: DashboardInformationSummaryProps): React.JSX.Element;

interface EmployeeFormCardProps {
}
declare function EmployeeFormCard(props: EmployeeFormCardProps): React.JSX.Element;

interface GeneralFormCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    onCancel?(): void;
    onSave?(): void;
}
declare function GeneralFormCard(props: GeneralFormCardProps): React.JSX.Element;

interface GeneralTabProps {
    tabs: string[];
    active: string;
    onTabChange(tab: string): void;
}
declare function GeneralTab(props: GeneralTabProps): React.JSX.Element;

type InputIconType = 'user' | 'email' | 'password';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
    icon?: InputIconType;
    v2?: boolean;
    v3?: boolean;
}
declare function InputText(props: InputTextProps): React.JSX.Element;

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    containerClassName?: string;
    icon?: InputIconType;
    v2?: boolean;
    v3?: boolean;
}
declare function InputSelect(props: InputSelectProps): React.JSX.Element;

interface InputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    containerClassName?: string;
    icon?: InputIconType;
    v2?: boolean;
    v3?: boolean;
}
declare function InputTextarea(props: InputTextareaProps): React.JSX.Element;

interface LabelProps {
    label?: string;
    children: any;
}
declare function Label(props: LabelProps): React.JSX.Element;

interface PopupAction {
    open(): void;
    close(): void;
}
interface PopupProps extends HTMLAttributes<HTMLDivElement> {
    parentClassName?: string;
}
declare const Popup: React.ForwardRefExoticComponent<PopupProps & React.RefAttributes<PopupAction>>;

interface TableActionsProps {
}
declare function TableActions(props: TableActionsProps): React.JSX.Element;

interface TablePaginationProps {
    total: number;
    offset: number;
    limit: number;
}
declare function TablePagination(props: TablePaginationProps): React.JSX.Element;

interface TableSearchFilterProps {
    leftItem?: JSX.Element;
}
declare function TableSearchFilter(props: TableSearchFilterProps): React.JSX.Element;

interface VerticalStepProps {
    activeIndex: number;
    items?: string[][];
}
declare function VerticalStep(props: VerticalStepProps): React.JSX.Element;

interface WelcomeModalProps {
    onSkip?(): void;
    onStartOnboard?(): void;
}
declare function WelcomeModal(props: WelcomeModalProps): React.JSX.Element;

interface OrganizationTreeProps {
}
declare function OrganizationTree(props: OrganizationTreeProps): React.JSX.Element;

interface EmptyOKRProps {
    onCreateOKR?(): void;
}
declare function EmptyOKR(props: EmptyOKRProps): React.JSX.Element;

interface CompanyTemplateProps {
}
declare function CompanyTemplate(props: CompanyTemplateProps): React.JSX.Element;

export { AgendaCard, Button, CompanyTemplate, DashboardInformationSummary, EmployeeFormCard, EmptyOKR, GeneralFormCard, GeneralTab, InputSelect, InputText, InputTextarea, Label, type LoginData, LoginPage, NDDashboard, NDNavbar, NDNavbarOnboarding, NDNavbarOnboardingOKR, type NDNavbarOnboardingOKRProps, type NDNavbarOnboardingProps, NDSidebar, type NDSidebarOptions, NDTemplate, NDTemplateOnboarding, NDTemplateOnboardingOKR, OrganizationTree, Popup, type PopupAction, SideOKRCard, TableActions, TablePagination, TableSearchFilter, Utility, VerticalStep, WelcomeModal };
