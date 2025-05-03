import React, { HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

declare namespace Utility {
    function formatNumber(n: number | string): string;
    function formatRp(n: number | string): string;
    function generateRandomColorHex(): string;
    function simpleNumber(num: number): string;
}

declare const BackSVG: string;

declare const Character2PNG: string;

declare const CharacterPNG: string;

declare const CheckSVG: string;

declare const ChevronRightSVG: string;

declare const CloseOutlineSVG: string;

declare const CloseSVG: string;

declare const DashboardIS1SVG: string;

declare const DashboardIS2SVG: string;

declare const DashboardISBG1SVG: string;

declare const DashboardISBG2SVG: string;

declare const DoubleChevronRightSVG: string;

declare const EditSVG: string;

declare const LogoPNG: string;

declare const LogoSingleSVG: string;

declare const MailSVG: string;

declare const PasswordSVG: string;

declare const SearchSVG: string;

declare const SuccessSVG: string;

declare const TrashSVG: string;

declare const UserSVG: string;

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

interface NDNavbarGeneralProps {
    leftItem?: JSX.Element;
    rightItem?: JSX.Element;
    onBack?(): void;
}
declare function NDNavbarGeneral(props: NDNavbarGeneralProps): React.JSX.Element;

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

interface NDTemplateGeneralProps extends HTMLAttributes<HTMLDivElement> {
    navbar: NDNavbarGeneralProps;
    children?: any;
}
declare function NDTemplateGeneral(props: NDTemplateGeneralProps): React.JSX.Element;

interface NDDashboardProps {
}
declare function NDDashboard(props: NDDashboardProps): React.JSX.Element;

interface NDBOKRTableRowProps {
    id: string;
    name: string;
    pic: string;
    progress: number;
    ews: JSX.Element | string;
    status: JSX.Element | string;
    timeline: string;
    list_key_result: NDOKRKeyResultData[];
    onAction?(id: string): void;
    onObjectiveContextMenu?(x: number, y: number, id: string): void;
    onKeyResultContextMenu?(x: number, y: number, id_objective: string, id: string): void;
}
declare function NDBOKRTableRow(props: NDBOKRTableRowProps): React.JSX.Element;
interface NDOKRKeyResultData {
    id: string;
    name: string;
    pic: string;
    progress: number;
    ews: JSX.Element | string;
    timeline: string;
    status: JSX.Element | string;
    onAction?(id: string): void;
}

type OKRContextMenuActionType = 'cascade' | 'cascading-tree' | 'edit' | 'delete';
interface OKRContextMenuData {
    x: number;
    y: number;
    id_objective?: string;
    id_key_result?: string;
    type: 'objective' | 'key-result' | 'none';
}
interface NDBOKRTableProps {
    rows: NDBOKRTableRowProps[];
    onAction(data: OKRContextMenuData, type: OKRContextMenuActionType): void;
}
declare function NDBOKRTable(props: NDBOKRTableProps): React.JSX.Element;

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

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
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

interface SuccessModalProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    onClose?(): void;
}
declare function SuccessModal(props: SuccessModalProps): React.JSX.Element;

interface OrganizationTreeProps {
}
declare function OrganizationTree(props: OrganizationTreeProps): React.JSX.Element;

interface EmptyOKRProps {
    onCreateOKR?(): void;
}
declare function EmptyOKR(props: EmptyOKRProps): React.JSX.Element;

interface KeyResultCardProps {
    onEdit?(): void;
    onDelete?(): void;
}
declare function KeyResultCard(props: KeyResultCardProps): React.JSX.Element;

interface OKRDetailViewProps {
}
declare function OKRDetailView(props: OKRDetailViewProps): React.JSX.Element;
interface ItemKeyResultProps {
    onCascade?(): void;
    onTree?(): void;
    onEdit?(): void;
    onDelete?(): void;
}
declare function ItemKeyResult(props: ItemKeyResultProps): React.JSX.Element;

interface CascadingTreeDataType<T> {
    data: T;
    children: CascadingTreeDataType<T>[];
}
interface CascadingTreeProps<T> {
    root: CascadingTreeDataType<T>;
    headView(level: number): JSX.Element;
    nodeView(data: T): JSX.Element;
    topView?: JSX.Element;
}
declare function CascadingTree<T>(props: CascadingTreeProps<T>): React.JSX.Element;

interface OKRTreeNodeData {
    photo: string;
    name: string;
    position: string;
    okr_target: number;
    cascading_percentage?: number;
}
interface OKRTreeNodeProps {
    data: OKRTreeNodeData;
    className?: string;
}
declare function OKRTreeNode(props: OKRTreeNodeProps): React.JSX.Element;

interface CompanyTemplateProps {
}
declare function CompanyTemplate(props: CompanyTemplateProps): React.JSX.Element;

export { AgendaCard, BackSVG, Button, CascadingTree, type CascadingTreeDataType, Character2PNG, CharacterPNG, CheckSVG, ChevronRightSVG, CloseOutlineSVG, CloseSVG, CompanyTemplate, DashboardIS1SVG, DashboardIS2SVG, DashboardISBG1SVG, DashboardISBG2SVG, DashboardInformationSummary, DoubleChevronRightSVG, EditSVG, EmployeeFormCard, EmptyOKR, GeneralFormCard, GeneralTab, InputSelect, InputText, InputTextarea, ItemKeyResult, KeyResultCard, Label, type LoginData, LoginPage, LogoPNG, LogoSingleSVG, MailSVG, NDBOKRTable, NDBOKRTableRow, type NDBOKRTableRowProps, NDDashboard, NDNavbar, NDNavbarGeneral, type NDNavbarGeneralProps, NDNavbarOnboarding, NDNavbarOnboardingOKR, type NDNavbarOnboardingOKRProps, type NDNavbarOnboardingProps, type NDOKRKeyResultData, NDSidebar, type NDSidebarOptions, NDTemplate, NDTemplateGeneral, NDTemplateOnboarding, NDTemplateOnboardingOKR, type OKRContextMenuActionType, type OKRContextMenuData, OKRDetailView, OKRTreeNode, type OKRTreeNodeData, OrganizationTree, PasswordSVG, Popup, type PopupAction, SearchSVG, SideOKRCard, SuccessModal, SuccessSVG, TableActions, TablePagination, TableSearchFilter, TrashSVG, UserSVG, Utility, VerticalStep, WelcomeModal };
