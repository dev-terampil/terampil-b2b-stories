import React, { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftIconURL?: string;
    rightIconURL?: string;
    containerClassName?: string;
    childClassName?: string;
    outline?: boolean;
    loading?: boolean;
}
declare function Button(props: ButtonProps): React.JSX.Element;

interface ProgressValueProps {
    value: number;
}
declare function ProgressValue(props: ProgressValueProps): React.JSX.Element;

interface ProgressValueThreeProps {
    valueComplete: number;
    valueProgress: number;
    valuePending: number;
}
declare function ProgressValueThree(props: ProgressValueThreeProps): React.JSX.Element;

type BadgeCollectionType = 'check' | 'timeout' | 'half-star' | 'red' | 'yellow' | 'green';
interface BadgeCollectionProps {
    type: BadgeCollectionType;
    children?: any;
    bigger?: boolean;
}
declare function BadgeCollection(props: BadgeCollectionProps): React.JSX.Element;

interface TabV1Props {
}
declare function TabV1(props: TabV1Props): React.JSX.Element;

interface TabV2Props {
}
declare function TabV2(props: TabV2Props): React.JSX.Element;

interface OptionData {
    label: string;
    value: any;
}
interface InputDropdownProps {
    options: OptionData[];
    onChange?(value: any): void;
    onChanges?(value: any[]): void;
    value?: any;
    values?: any[];
    className?: string;
    placeholder?: string;
    multivalue?: boolean;
    noFilter?: boolean;
    noPlaceholder?: boolean;
}
declare function InputDropdown(props: InputDropdownProps): React.JSX.Element;

interface TableMeta<T> {
    columns: TableMetaColumn[];
    renderRow(row: T, i: number): JSX.Element;
}
interface TableMetaColumn {
    label: string;
    filter?: TableMetaColumnFilter;
}
type TableMetaColumnFilter = TableMetaColumnFilterText | TableMetaColumnFilterOptionSingleValue | TableMetaColumnFilterOptionMultiValue;
interface TableMetaColumnFilterText {
    type: 'text';
    placeholder?: string;
    onSubmit(value: any): void;
}
interface TableMetaColumnFilterOptionSingleValue {
    type: 'option-single-value';
    placeholder?: string;
    options: OptionData[];
    onSubmit(value: any): void;
}
interface TableMetaColumnFilterOptionMultiValue {
    type: 'option-multi-value';
    placeholder?: string;
    options: OptionData[];
    onSubmit(values: any[]): void;
}

interface TableProps<T> {
    meta: TableMeta<T>;
    data: T[];
    numActions?: number;
}
declare function Table<T>(props: TableProps<T>): React.JSX.Element;

declare namespace OrgTreeData {
    interface Tree<T> {
        id: string;
        data: T;
        children: Tree<T>[];
    }
}
declare enum PaddingMode {
    I = "I",
    T = "T",
    L = "L",
    O = "O"
}
interface OrganizationTreeProps<T> {
    renderView(data: OrgTreeData.Tree<T>): JSX.Element;
    data: OrgTreeData.Tree<T>;
    level?: number;
    padding?: PaddingMode[];
    configSpaceWidth?: number;
    configSpaceHeight?: number;
    configBorderSize?: number;
}
declare function OrganizationTree<T>(props: OrganizationTreeProps<T>): React.JSX.Element;

interface PaginationProps {
    limit?: number;
    page: number;
    totalItems: number;
    onChange(page: number, limit: number): void;
}
declare function Pagination(props: PaginationProps): React.JSX.Element;

interface GradientCardProps extends HTMLAttributes<HTMLDivElement> {
}
declare function GradientCard(props: GradientCardProps): React.JSX.Element;

interface ModalAction {
    open(): void;
    close(): void;
    isOpen(): boolean;
}
interface BaseModalProps {
    children?: any;
    childClassName?: string;
    onDismiss?(): void;
    preventDismiss?: boolean;
}
declare const BaseModal: React.ForwardRefExoticComponent<BaseModalProps & React.RefAttributes<ModalAction>>;

interface TreeNodeV1Props {
    photoUrl?: string;
    division?: string;
    name: string;
    onTambah?(): void;
    onHapus?(): void;
    onDetail?(): void;
}
declare function TreeNodeV1(props: TreeNodeV1Props): React.JSX.Element;

interface NewHeaderProps {
    iconUrl?: string;
    title?: string;
    hideAI?: boolean;
}
declare function NewHeader(props: NewHeaderProps): React.JSX.Element;

interface NewRightNavProps {
}
declare function NewRightNav(props: NewRightNavProps): React.JSX.Element;

declare enum RoleSBType {
    PERSONAL = "PERSONAL",
    TEAM = "TEAM",
    CEO = "CEO",
    HR = "HR"
}

interface NewSidebarProps {
    mode: RoleSBType;
    setSidebarMode(mode: RoleSBType): void;
}
declare function NewSidebar(props: NewSidebarProps): React.JSX.Element;

interface NewTemplateProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    titleIconUrl?: string;
    mode?: RoleSBType;
    setSidebarMode?(mode: RoleSBType): void;
}
declare function NewTemplate(props: NewTemplateProps): React.JSX.Element;

interface AdminSidebarProps {
}
declare function AdminSidebar(props: AdminSidebarProps): React.JSX.Element;

interface AdminTemplateProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    titleIconUrl?: string;
}
declare function AdminTemplate(props: AdminTemplateProps): React.JSX.Element;

declare function useOutsideClick(ref: any, callback: (e: any) => void): void;

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
}
declare function InputText(props: InputTextProps): React.JSX.Element;

interface InputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare function InputTextarea(props: InputTextareaProps): React.JSX.Element;

interface FormContainerProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}
declare function FormContainer(props: FormContainerProps): React.JSX.Element;

interface LabelProps {
    label: string;
    required?: boolean;
    children?: any;
}
declare function Label(props: LabelProps): React.JSX.Element;

interface ModalInfoProps {
    title?: string;
    description?: string;
    labelOK?: string;
    onOK?(): void;
}
declare function ModalInfo(props: ModalInfoProps): React.JSX.Element;

interface ModalYesNoProps {
    title?: string;
    description?: string;
    labelYes?: string;
    labelNo?: string;
    onYes?(): void;
    onNo?(): void;
}
declare function ModalYesNo(props: ModalYesNoProps): React.JSX.Element;

export { AdminSidebar, AdminTemplate, BadgeCollection, BaseModal, type BaseModalProps, Button, FormContainer, GradientCard, InputDropdown, InputText, InputTextarea, Label, type ModalAction, ModalInfo, ModalYesNo, NewHeader, NewRightNav, NewSidebar, NewTemplate, type OptionData, OrgTreeData, OrganizationTree, Pagination, ProgressValue, ProgressValueThree, RoleSBType, TabV1, TabV2, Table, type TableMeta, type TableMetaColumn, type TableMetaColumnFilter, type TableMetaColumnFilterOptionMultiValue, type TableMetaColumnFilterOptionSingleValue, type TableMetaColumnFilterText, TreeNodeV1, useOutsideClick };
