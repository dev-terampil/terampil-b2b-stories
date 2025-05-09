import React, { HTMLAttributes, ButtonHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from 'react';

declare namespace Utility {
    function formatNumber(n: number | string): string;
    function formatRp(n: number | string): string;
    function generateRandomColorHex(): string;
    function simpleNumber(num: number): string;
}

declare const AddCircleSVG: string;

declare const BackSVG: string;

declare const BgCardBotRigSVG: string;

declare const CascadeSVG: string;

declare const CascadeTreeSVG: string;

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

declare const DetailDocumentSVG: string;

declare const DIcon1SVG: string;

declare const DIcon2SVG: string;

declare const DIcon3SVG: string;

declare const DIcon4SVG: string;

declare const DoubleChevronRightSVG: string;

declare const DoubleCoinSVG: string;

declare const DownloadSVG: string;

declare const EditSVG: string;

declare const FemaleSVG: string;

declare const IconBoxGenBSVG: string;

declare const IconBoxGenMSVG: string;

declare const IconBoxGenZSVG: string;

declare const IconBoxGlobeSVG: string;

declare const IconBoxGroupSVG: string;

declare const IconBoxPeopleSVG: string;

declare const LogoPNG: string;

declare const LogoSingleSVG: string;

declare const MailSVG: string;

declare const MaleSVG: string;

declare const PasswordSVG: string;

declare const SearchSVG: string;

declare const SubmitPlaneSVG: string;

declare const SuccessSVG: string;

declare const ThreeDotsSVG: string;

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

interface BudgetCardProps {
    label: string;
    unit: string;
    value: string;
    bgColor: 'green' | 'blue';
}
declare function BudgetCard(props: BudgetCardProps): React.JSX.Element;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    smaller?: boolean;
}
declare function Button(props: ButtonProps): React.JSX.Element;

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

interface DashboardInformationSummaryProps {
}
declare function DashboardInformationSummary(props: DashboardInformationSummaryProps): React.JSX.Element;

interface EmployeeFormCardProps {
}
declare function EmployeeFormCard(props: EmployeeFormCardProps): React.JSX.Element;

interface EmptyOKRProps {
    onCreateOKR?(): void;
}
declare function EmptyOKR(props: EmptyOKRProps): React.JSX.Element;

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
declare function getIcon(type: InputIconType): string;

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

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
    icon?: InputIconType;
    v2?: boolean;
    v3?: boolean;
}
declare function InputText(props: InputTextProps): React.JSX.Element;

interface KeyResultCardProps {
    onEdit?(): void;
    onDelete?(): void;
}
declare function KeyResultCard(props: KeyResultCardProps): React.JSX.Element;

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
}
declare function Label(props: LabelProps): React.JSX.Element;

type MyOKRContextMenuActionType = 'submit-kr' | 'see-details';
interface MyOKRContextMenuData {
    x: number;
    y: number;
    id_objective?: string;
    type: 'objective' | 'none';
}
interface MyOKRAccordionCardProps {
    onAction(data: MyOKRContextMenuData, type: MyOKRContextMenuActionType): void;
}
declare function MyOKRAccordionCard(props: MyOKRAccordionCardProps): React.JSX.Element;

type MyTaskContextMenuActionType = 'submit-task' | 'see-details' | 'edit' | 'feedback' | 'delete';
interface MyTaskContextMenuData {
    x: number;
    y: number;
    id_task?: number;
    type: 'task' | 'none';
}
interface MyTaskAccordionCardProps {
    onAction(data: MyTaskContextMenuData, type: MyTaskContextMenuActionType): void;
}
declare function MyTaskAccordionCard(props: MyTaskAccordionCardProps): React.JSX.Element;

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

interface OrganizationTreeProps {
}
declare function OrganizationTree(props: OrganizationTreeProps): React.JSX.Element;

interface PopupAction {
    open(): void;
    close(): void;
}
interface PopupProps extends HTMLAttributes<HTMLDivElement> {
    parentClassName?: string;
}
declare const Popup: React.ForwardRefExoticComponent<PopupProps & React.RefAttributes<PopupAction>>;

interface SuccessModalProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    onClose?(): void;
}
declare function SuccessModal(props: SuccessModalProps): React.JSX.Element;

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

interface TECValueType1 {
    type: 1;
    value: string;
}
interface TECValueType2 {
    type: 2;
    value: string;
    unit: string;
}
interface TECBottomType0 {
    type: 0;
}
interface TECBottomType1 {
    type: 1;
    men: string;
    woman: string;
}
interface TECBottomType2 {
    type: 2;
    subdivision: string;
}
interface TotalEmployeeCardProps {
    value: TECValueType1 | TECValueType2;
    bottom: TECBottomType0 | TECBottomType1 | TECBottomType2;
    icon: 'people' | 'group' | 'globe' | 'genz' | 'genm' | 'genb';
}
declare function TotalEmployeeCard(props: TotalEmployeeCardProps): React.JSX.Element;

interface VerticalStepProps {
    activeIndex: number;
    items?: string[][];
}
declare function VerticalStep(props: VerticalStepProps): React.JSX.Element;

interface WelcomeHeaderProps {
}
declare function WelcomeHeader(props: WelcomeHeaderProps): React.JSX.Element;

interface WelcomeModalProps {
    onSkip?(): void;
    onStartOnboard?(): void;
}
declare function WelcomeModal(props: WelcomeModalProps): React.JSX.Element;

interface CompanyTemplateProps {
}
declare function CompanyTemplate(props: CompanyTemplateProps): React.JSX.Element;

interface NDB9BoxQuandrantProps {
}
declare function NDB9BoxQuandrant(props: NDB9BoxQuandrantProps): React.JSX.Element;

interface NDB9BoxQuandrantWithSummaryProps {
}
declare function NDB9BoxQuandrantWithSummary(props: NDB9BoxQuandrantWithSummaryProps): React.JSX.Element;

interface NDBCardContainerProps {
    children?: any;
    title: string;
    monthYear: string;
}
declare function NDBCardContainer(props: NDBCardContainerProps): React.JSX.Element;

interface NDBCardDoughnutProps {
    title: string;
    value: number;
    mode: 'blue' | 'yellow' | 'red';
}
declare function NDBCardDoughnut(props: NDBCardDoughnutProps): React.JSX.Element;

interface NDBCompetencyGapProps {
}
declare function NDBCompetencyGap(props: NDBCompetencyGapProps): React.JSX.Element;

interface NDBDetailProgressOKRProps {
}
declare function NDBDetailProgressOKR(props: NDBDetailProgressOKRProps): React.JSX.Element;

interface NDBDetailProgressTaskProps {
}
declare function NDBDetailProgressTask(props: NDBDetailProgressTaskProps): React.JSX.Element;

interface NDBDoughnutChartProps {
    r: number;
    stroke: number;
    strokeRatio?: number;
    value: number;
    blue?: boolean;
    yellow?: boolean;
    red?: boolean;
    d1BackgroundColor?: string;
    d2BackgroundColorG1?: string;
    d2BackgroundColorG2?: string;
}
declare function NDBDoughnutChart(props: NDBDoughnutChartProps): React.JSX.Element;

interface NDBFinancialCardProps {
    mainColor: 'blue' | 'green' | 'yellow';
    miniInfoType: 'value' | 'change';
    label: string;
    value: string;
    sublabel: string;
    subvalue: string;
    miniInfoValue: string;
    forecast: string;
}
declare function NDBFinancialCard(props: NDBFinancialCardProps): React.JSX.Element;

interface NDBInsightProps {
}
declare function NDBInsight(props: NDBInsightProps): React.JSX.Element;

interface NDBMainStatusSimpleProps {
}
declare function NDBMainStatusSimple(props: NDBMainStatusSimpleProps): React.JSX.Element;

interface NDBMainStatusProps {
}
declare function NDBMainStatus(props: NDBMainStatusProps): React.JSX.Element;

interface NDBMainSummaryProps {
}
declare function NDBMainSummary(props: NDBMainSummaryProps): React.JSX.Element;

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

interface NDBSalesFunnelProps {
}
declare function NDBSalesFunnel(props: NDBSalesFunnelProps): React.JSX.Element;

interface NDBSimpleDoughnutChartProps {
    r: number;
    stroke: number;
    strokeRatio?: number;
    value: number;
    foregroundColor?: string;
    backgroundColor?: string;
}
declare function NDBSimpleDoughnutChart(props: NDBSimpleDoughnutChartProps): React.JSX.Element;

interface NDBSimpleHexagonChartProps {
    r: number;
    values: [string | null, string | null, number, number, number, number, number, number][];
    foregroundColor?: string;
    bgStrip1?: string;
    bgStrip2?: string;
    bgStroke?: string;
}
declare function NDBSimpleHexagonChart(props: NDBSimpleHexagonChartProps): React.JSX.Element;

interface NDBTotalAssignedOKRsProps {
}
declare function NDBTotalAssignedOKRs(props: NDBTotalAssignedOKRsProps): React.JSX.Element;

interface NDBYouVsTeamProps {
    valueYou: number;
    valueTeam: number;
}
declare function NDBYouVsTeam(props: NDBYouVsTeamProps): React.JSX.Element;

export { AddCircleSVG, AgendaCard, BackSVG, BgCardBotRigSVG, BudgetCard, Button, CascadeSVG, CascadeTreeSVG, CascadingTree, type CascadingTreeDataType, Character2PNG, CharacterPNG, CheckSVG, ChevronRightSVG, CloseOutlineSVG, CloseSVG, CompanyTemplate, DIcon1SVG, DIcon2SVG, DIcon3SVG, DIcon4SVG, DashboardIS1SVG, DashboardIS2SVG, DashboardISBG1SVG, DashboardISBG2SVG, DashboardInformationSummary, DetailDocumentSVG, DoubleChevronRightSVG, DoubleCoinSVG, DownloadSVG, EditSVG, EmployeeFormCard, EmptyOKR, FemaleSVG, GeneralFormCard, GeneralTab, IconBoxGenBSVG, IconBoxGenMSVG, IconBoxGenZSVG, IconBoxGlobeSVG, IconBoxGroupSVG, IconBoxPeopleSVG, type InputIconType, InputSelect, InputText, InputTextarea, ItemKeyResult, KeyResultCard, Label, type LoginData, LoginPage, LogoPNG, LogoSingleSVG, MailSVG, MaleSVG, MyOKRAccordionCard, type MyOKRContextMenuActionType, type MyOKRContextMenuData, MyTaskAccordionCard, type MyTaskContextMenuActionType, type MyTaskContextMenuData, NDB9BoxQuandrant, NDB9BoxQuandrantWithSummary, NDBCardContainer, NDBCardDoughnut, NDBCompetencyGap, NDBDetailProgressOKR, NDBDetailProgressTask, NDBDoughnutChart, NDBFinancialCard, NDBInsight, NDBMainStatus, NDBMainStatusSimple, NDBMainSummary, NDBOKRTable, NDBOKRTableRow, type NDBOKRTableRowProps, NDBSalesFunnel, NDBSimpleDoughnutChart, NDBSimpleHexagonChart, NDBTotalAssignedOKRs, NDBYouVsTeam, NDDashboard, NDNavbar, NDNavbarGeneral, type NDNavbarGeneralProps, NDNavbarOnboarding, NDNavbarOnboardingOKR, type NDNavbarOnboardingOKRProps, type NDNavbarOnboardingProps, type NDOKRKeyResultData, NDSidebar, type NDSidebarOptions, NDTemplate, NDTemplateGeneral, NDTemplateOnboarding, NDTemplateOnboardingOKR, type OKRContextMenuActionType, type OKRContextMenuData, OKRDetailView, OKRTreeNode, type OKRTreeNodeData, OrganizationTree, PasswordSVG, Popup, type PopupAction, SearchSVG, SideOKRCard, SubmitPlaneSVG, SuccessModal, SuccessSVG, type TECBottomType0, type TECBottomType1, type TECBottomType2, type TECValueType1, type TECValueType2, TableActions, TablePagination, TableSearchFilter, ThreeDotsSVG, TotalEmployeeCard, TrashSVG, UserSVG, Utility, VerticalStep, WelcomeHeader, WelcomeModal, getIcon };
