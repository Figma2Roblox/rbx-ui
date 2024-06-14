import { Enum } from "./enums";
import { Color3, UDim, UDim2, Vector2, Rect, NumberSequence, ColorSequence, Font } from "../datatypes";

export interface Instance {
	readonly ClassName: keyof Instances;
	Name: string;
}

export interface GuiBase extends Instance {}

export interface GuiBase2d extends GuiBase {
	AutoLocalize: boolean;
	SelectionBehaviorDown: Enum.SelectionBehavior;
	SelectionBehaviorLeft: Enum.SelectionBehavior;
	SelectionBehaviorRight: Enum.SelectionBehavior;
	SelectionBehaviorUp: Enum.SelectionBehavior;
	SelectionGroup: boolean;
}

export interface GuiObject extends GuiBase2d {
	Active: boolean;
	AnchorPoint: Vector2;
	AutomaticSize: Enum.AutomaticSize;
	BackgroundColor3: Color3;
	BackgroundTransparency: number;
	BorderColor3: Color3;
	BorderMode: Enum.BorderMode;
	BorderSizePixel: number;
	ClipsDescendants: boolean;
	Interactable: boolean;
	LayoutOrder: number;
	NextSelectionDown: GuiObject | undefined;
	NextSelectionLeft: GuiObject | undefined;
	NextSelectionRight: GuiObject | undefined;
	NextSelectionUp: GuiObject | undefined;
	Position: UDim2;
	Rotation: number;
	Selectable: boolean;
	SelectionImageObject: GuiObject | undefined;
	SelectionOrder: number;
	Size: UDim2;
	SizeConstraint: Enum.SizeConstraint;
	Visible: boolean;
	ZIndex: number;
}

export interface Frame extends GuiObject {
	Style: Enum.FrameStyle;
}

export interface GuiButton extends GuiObject {
	AutoButtonColor: boolean;
	Modal: boolean;
	Selected: boolean;
	Style: Enum.ButtonStyle;
}

export interface GuiLabel extends GuiObject {}

export interface ImageButton extends GuiButton {
	HoverImage: string;
	Image: string;
	ImageColor3: Color3;
	ImageRectOffset: Vector2;
	ImageRectSize: Vector2;
	ImageTransparency: number;
	PressedImage: string;
	ResampleMode: Enum.ResamplerMode;
	ScaleType: Enum.ScaleType;
	SliceCenter: Rect;
	SliceScale: number;
	TileSize: UDim2;
}

export interface ImageLabel extends GuiLabel {
	Image: string;
	ImageColor3: Color3;
	ImageRectOffset: Vector2;
	ImageRectSize: Vector2;
	ImageTransparency: number;
	ResampleMode: Enum.ResamplerMode;
	ScaleType: Enum.ScaleType;
	SliceCenter: Rect;
	SliceScale: number;
	TileSize: UDim2;
}

export interface TextBox extends GuiObject {
	ClearTextOnFocus: boolean;
	FontFace: Font;
	LineHeight: number;
	MaxVisibleGraphemes: number;
	MultiLine: boolean;
	PlaceholderColor3: Color3;
	PlaceholderText: string;
	RichText: boolean;
	ShowNativeInput: boolean;
	Text: string;
	TextColor3: Color3;
	TextDirection: Enum.TextDirection;
	TextEditable: boolean;
	TextScaled: boolean;
	TextSize: number;
	TextStrokeColor3: Color3;
	TextStrokeTransparency: number;
	TextTransparency: number;
	TextTruncate: Enum.TextTruncate;
	TextWrapped: boolean;
	TextXAlignment: Enum.TextXAlignment;
	TextYAlignment: Enum.TextYAlignment;
}

export interface TextButton extends GuiButton {
	FontFace: Font;
	LineHeight: number;
	MaxVisibleGraphemes: number;
	RichText: boolean;
	Text: string;
	TextColor3: Color3;
	TextDirection: Enum.TextDirection;
	TextScaled: boolean;
	TextSize: number;
	TextStrokeColor3: Color3;
	TextStrokeTransparency: number;
	TextTransparency: number;
	TextTruncate: Enum.TextTruncate;
	TextWrapped: boolean;
	TextXAlignment: Enum.TextXAlignment;
	TextYAlignment: Enum.TextYAlignment;
}

export interface TextLabel extends GuiLabel {
	FontFace: Font;
	LineHeight: number;
	MaxVisibleGraphemes: number;
	RichText: boolean;
	Text: string;
	TextColor3: Color3;
	TextDirection: Enum.TextDirection;
	TextScaled: boolean;
	TextSize: number;
	TextStrokeColor3: Color3;
	TextStrokeTransparency: number;
	TextTransparency: number;
	TextTruncate: Enum.TextTruncate;
	TextWrapped: boolean;
	TextXAlignment: Enum.TextXAlignment;
	TextYAlignment: Enum.TextYAlignment;
}

export interface UIBase extends Instance {}

export interface UIComponent extends UIBase {}

export interface UIConstraint extends UIComponent {}

export interface UIAspectRatioConstraint extends UIConstraint {
	AspectRatio: number;
	AspectType: Enum.AspectType;
	DominantAxis: Enum.DominantAxis;
}

export interface UICorner extends UIComponent {
	CornerRadius: UDim;
}

export interface UIGradient extends UIComponent {
	Color: ColorSequence;
	Enabled: boolean;
	Offset: Vector2;
	Rotation: number;
	Transparency: NumberSequence;
}

export interface UILayout extends UIComponent {}

export interface UIGridStyleLayout extends UILayout {
	FillDirection: Enum.FillDirection;
	HorizontalAlignment: Enum.HorizontalAlignment;
	SortOrder: Enum.SortOrder;
	VerticalAlignment: Enum.VerticalAlignment;
}

export interface UIGridLayout extends UIGridStyleLayout {
	CellPadding: UDim2;
	CellSize: UDim2;
	FillDirectionMaxCells: number;
	StartCorner: Enum.StartCorner;
}

export interface UIListLayout extends UIGridStyleLayout {
	HorizontalFlex: Enum.UIFlexAlignment;
	ItemLineAlignment: Enum.ItemLineAlignment;
	Padding: UDim;
	VerticalFlex: Enum.UIFlexAlignment;
	Wraps: boolean;
}

export interface UIPadding extends UIComponent {
	PaddingBottom: UDim;
	PaddingLeft: UDim;
	PaddingRight: UDim;
	PaddingTop: UDim;
}

export interface UIPageLayout extends UIGridStyleLayout {
	Animated: boolean;
	Circular: boolean;
	EasingDirection: Enum.EasingDirection;
	EasingStyle: Enum.EasingStyle;
	GamepadInputEnabled: boolean;
	Padding: UDim;
	ScrollWheelInputEnabled: boolean;
	TouchInputEnabled: boolean;
	TweenTime: number;
}

export interface UIScale extends UIComponent {
	Scale: number;
}

export interface UISizeConstraint extends UIConstraint {
	MaxSize: Vector2;
	MinSize: Vector2;
}

export interface UIStroke extends UIComponent {
	ApplyStrokeMode: Enum.ApplyStrokeMode;
	Color: Color3;
	Enabled: boolean;
	LineJoinMode: Enum.LineJoinMode;
	Thickness: number;
	Transparency: number;
}

export interface UITableLayout extends UIGridStyleLayout {
	FillEmptySpaceColumns: boolean;
	FillEmptySpaceRows: boolean;
	MajorAxis: Enum.TableMajorAxis;
	Padding: UDim2;
}

export interface UITextSizeConstraint extends UIConstraint {
	MaxTextSize: number;
	MinTextSize: number;
}

export interface CreatableInstances {
	Frame: Frame;
	ImageButton: ImageButton;
	ImageLabel: ImageLabel;
	TextBox: TextBox;
	TextButton: TextButton;
	TextLabel: TextLabel;
	UIAspectRatioConstraint: UIAspectRatioConstraint;
	UICorner: UICorner;
	UIGradient: UIGradient;
	UIGridLayout: UIGridLayout;
	UIListLayout: UIListLayout;
	UIPadding: UIPadding;
	UIPageLayout: UIPageLayout;
	UIScale: UIScale;
	UISizeConstraint: UISizeConstraint;
	UIStroke: UIStroke;
	UITableLayout: UITableLayout;
	UITextSizeConstraint: UITextSizeConstraint;
}

export interface Instances extends CreatableInstances {
	GuiBase: GuiBase;
	GuiBase2d: GuiBase2d;
	GuiButton: GuiButton;
	GuiLabel: GuiLabel;
	GuiObject: GuiObject;
	Instance: Instance;
	UIBase: UIBase;
	UIComponent: UIComponent;
	UIConstraint: UIConstraint;
	UIGridStyleLayout: UIGridStyleLayout;
	UILayout: UILayout;
}
