import { Instances, CreatableInstances } from "./instanceInterfaces";
import { Color3, UDim, UDim2, Vector2, Rect, NumberSequence, ColorSequence, Font } from "../datatypes";
import { Enum } from "./enums";

export class Instance implements Instance {
	readonly ClassName: keyof Instances = "Instance";
	Name: string = "Instance";
	Parent: Instance | undefined = undefined;
}

export class GuiBase extends Instance implements GuiBase {
	readonly ClassName: keyof Instances = "GuiBase";
	Name: string = "GuiBase";
}

export class GuiBase2d extends GuiBase implements GuiBase2d {
	readonly ClassName: keyof Instances = "GuiBase2d";
	Name: string = "GuiBase2d";
	AutoLocalize!: boolean;
	SelectionBehaviorDown!: Enum.SelectionBehavior;
	SelectionBehaviorLeft!: Enum.SelectionBehavior;
	SelectionBehaviorRight!: Enum.SelectionBehavior;
	SelectionBehaviorUp!: Enum.SelectionBehavior;
	SelectionGroup!: boolean;
}

export class GuiObject extends GuiBase2d implements GuiObject {
	readonly ClassName: keyof Instances = "GuiObject";
	Name: string = "GuiObject";
	Active!: boolean;
	AnchorPoint!: Vector2;
	AutomaticSize!: Enum.AutomaticSize;
	BackgroundColor3!: Color3;
	BackgroundTransparency!: number;
	BorderColor3!: Color3;
	BorderMode!: Enum.BorderMode;
	BorderSizePixel!: number;
	ClipsDescendants!: boolean;
	Interactable!: boolean;
	LayoutOrder!: number;
	NextSelectionDown!: GuiObject | undefined;
	NextSelectionLeft!: GuiObject | undefined;
	NextSelectionRight!: GuiObject | undefined;
	NextSelectionUp!: GuiObject | undefined;
	Position!: UDim2;
	Rotation!: number;
	Selectable!: boolean;
	SelectionImageObject!: GuiObject | undefined;
	SelectionOrder!: number;
	Size!: UDim2;
	SizeConstraint!: Enum.SizeConstraint;
	Visible!: boolean;
	ZIndex!: number;
}

export class Frame extends GuiObject implements Frame {
	readonly ClassName: keyof Instances = "Frame";
	Name: string = "Frame";
	Style: Enum.FrameStyle = Enum.FrameStyle.Custom;
}

export class GuiButton extends GuiObject implements GuiButton {
	readonly ClassName: keyof Instances = "GuiButton";
	Name: string = "GuiButton";
	AutoButtonColor!: boolean;
	Modal!: boolean;
	Selected!: boolean;
	Style!: Enum.ButtonStyle;
}

export class GuiLabel extends GuiObject implements GuiLabel {
	readonly ClassName: keyof Instances = "GuiLabel";
	Name: string = "GuiLabel";
}

export class ImageButton extends GuiButton implements ImageButton {
	readonly ClassName: keyof Instances = "ImageButton";
	Name: string = "ImageButton";
	HoverImage: string = "";
	Image: string = "";
	ImageColor3: Color3 = Color3.fromHex("FFFFFF");
	ImageRectOffset: Vector2 = new Vector2;
	ImageRectSize: Vector2 = new Vector2;
	ImageTransparency: number = 0;
	PressedImage: string = "";
	ResampleMode: Enum.ResamplerMode = Enum.ResamplerMode.Default;
	ScaleType: Enum.ScaleType = Enum.ScaleType.Stretch;
	SliceCenter: Rect = new Rect;
	SliceScale: number = 1;
	TileSize: UDim2 = UDim2.fromScale(1, 1);
}

export class ImageLabel extends GuiLabel implements ImageLabel {
	readonly ClassName: keyof Instances = "ImageLabel";
	Name: string = "ImageLabel";
	Image: string = "";
	ImageColor3: Color3 = Color3.fromHex("FFFFFF");
	ImageRectOffset: Vector2 = new Vector2;
	ImageRectSize: Vector2 = new Vector2;
	ImageTransparency: number = 0;
	ResampleMode: Enum.ResamplerMode = Enum.ResamplerMode.Default;
	ScaleType: Enum.ScaleType = Enum.ScaleType.Stretch;
	SliceCenter: Rect = new Rect;
	SliceScale: number = 1;
	TileSize: UDim2 = UDim2.fromScale(1, 1);
}

export class TextBox extends GuiObject implements TextBox {
	readonly ClassName: keyof Instances = "TextBox";
	Name: string = "TextBox";
	ClearTextOnFocus: boolean = true;
	FontFace: Font = Font.fromName("LegacyArial");
	LineHeight: number = 1;
	MaxVisibleGraphemes: number = -1;
	MultiLine: boolean = false;
	PlaceholderColor3: Color3 = Color3.fromHex("B2B2B2");
	PlaceholderText: string = "";
	RichText: boolean = false;
	ShowNativeInput: boolean = true;
	Text: string = "TextBox";
	TextColor3: Color3 = Color3.fromHex("1B2A35");
	TextDirection: Enum.TextDirection = Enum.TextDirection.Auto;
	TextEditable: boolean = true;
	TextScaled: boolean = false;
	TextSize: number = 8;
	TextStrokeColor3: Color3 = Color3.fromHex("000000");
	TextStrokeTransparency: number = 1;
	TextTransparency: number = 0;
	TextTruncate: Enum.TextTruncate = Enum.TextTruncate.None;
	TextWrapped: boolean = false;
	TextXAlignment: Enum.TextXAlignment = Enum.TextXAlignment.Center;
	TextYAlignment: Enum.TextYAlignment = Enum.TextYAlignment.Center;
}

export class TextButton extends GuiButton implements TextButton {
	readonly ClassName: keyof Instances = "TextButton";
	Name: string = "TextButton";
	FontFace: Font = Font.fromName("LegacyArial");
	LineHeight: number = 1;
	MaxVisibleGraphemes: number = -1;
	RichText: boolean = false;
	Text: string = "Button";
	TextColor3: Color3 = Color3.fromHex("1B2A35");
	TextDirection: Enum.TextDirection = Enum.TextDirection.Auto;
	TextScaled: boolean = false;
	TextSize: number = 8;
	TextStrokeColor3: Color3 = Color3.fromHex("000000");
	TextStrokeTransparency: number = 1;
	TextTransparency: number = 0;
	TextTruncate: Enum.TextTruncate = Enum.TextTruncate.None;
	TextWrapped: boolean = false;
	TextXAlignment: Enum.TextXAlignment = Enum.TextXAlignment.Center;
	TextYAlignment: Enum.TextYAlignment = Enum.TextYAlignment.Center;
}

export class TextLabel extends GuiLabel implements TextLabel {
	readonly ClassName: keyof Instances = "TextLabel";
	Name: string = "TextLabel";
	FontFace: Font = Font.fromName("LegacyArial");
	LineHeight: number = 1;
	MaxVisibleGraphemes: number = -1;
	RichText: boolean = false;
	Text: string = "Label";
	TextColor3: Color3 = Color3.fromHex("1B2A35");
	TextDirection: Enum.TextDirection = Enum.TextDirection.Auto;
	TextScaled: boolean = false;
	TextSize: number = 8;
	TextStrokeColor3: Color3 = Color3.fromHex("000000");
	TextStrokeTransparency: number = 1;
	TextTransparency: number = 0;
	TextTruncate: Enum.TextTruncate = Enum.TextTruncate.None;
	TextWrapped: boolean = false;
	TextXAlignment: Enum.TextXAlignment = Enum.TextXAlignment.Center;
	TextYAlignment: Enum.TextYAlignment = Enum.TextYAlignment.Center;
}

export class UIBase extends Instance implements UIBase {
	readonly ClassName: keyof Instances = "UIBase";
	Name: string = "UIBase";
}

export class UIComponent extends UIBase implements UIComponent {
	readonly ClassName: keyof Instances = "UIComponent";
	Name: string = "UIComponent";
}

export class UIConstraint extends UIComponent implements UIConstraint {
	readonly ClassName: keyof Instances = "UIConstraint";
	Name: string = "UIConstraint";
}

export class UIAspectRatioConstraint extends UIConstraint implements UIAspectRatioConstraint {
	readonly ClassName: keyof Instances = "UIAspectRatioConstraint";
	Name: string = "UIAspectRatioConstraint";
	AspectRatio: number = 1;
	AspectType: Enum.AspectType = Enum.AspectType.FitWithinMaxSize;
	DominantAxis: Enum.DominantAxis = Enum.DominantAxis.Width;
}

export class UICorner extends UIComponent implements UICorner {
	readonly ClassName: keyof Instances = "UICorner";
	Name: string = "UICorner";
	CornerRadius: UDim = new UDim(0, 8);
}

export class UIGradient extends UIComponent implements UIGradient {
	readonly ClassName: keyof Instances = "UIGradient";
	Name: string = "UIGradient";
	Color: ColorSequence = new ColorSequence(Color3.fromHex("FFFFFF"));
	Enabled: boolean = true;
	Offset: Vector2 = new Vector2;
	Rotation: number = 0;
	Transparency: NumberSequence = new NumberSequence(0);
}

export class UILayout extends UIComponent implements UILayout {
	readonly ClassName: keyof Instances = "UILayout";
	Name: string = "UILayout";
}

export class UIGridStyleLayout extends UILayout implements UIGridStyleLayout {
	readonly ClassName: keyof Instances = "UIGridStyleLayout";
	Name: string = "UIGridStyleLayout";
	FillDirection!: Enum.FillDirection;
	HorizontalAlignment!: Enum.HorizontalAlignment;
	SortOrder!: Enum.SortOrder;
	VerticalAlignment!: Enum.VerticalAlignment;
}

export class UIGridLayout extends UIGridStyleLayout implements UIGridLayout {
	readonly ClassName: keyof Instances = "UIGridLayout";
	Name: string = "UIGridLayout";
	CellPadding: UDim2 = UDim2.fromOffset(5, 5);
	CellSize: UDim2 = UDim2.fromOffset(100, 100);
	FillDirectionMaxCells: number = 0;
	StartCorner: Enum.StartCorner = Enum.StartCorner.TopLeft;
}

export class UIListLayout extends UIGridStyleLayout implements UIListLayout {
	readonly ClassName: keyof Instances = "UIListLayout";
	Name: string = "UIListLayout";
	HorizontalFlex: Enum.UIFlexAlignment = Enum.UIFlexAlignment.None;
	ItemLineAlignment: Enum.ItemLineAlignment = Enum.ItemLineAlignment.Automatic;
	Padding: UDim = new UDim;
	VerticalFlex: Enum.UIFlexAlignment = Enum.UIFlexAlignment.None;
	Wraps: boolean = false;
}

export class UIPadding extends UIComponent implements UIPadding {
	readonly ClassName: keyof Instances = "UIPadding";
	Name: string = "UIPadding";
	PaddingBottom: UDim = new UDim;
	PaddingLeft: UDim = new UDim;
	PaddingRight: UDim = new UDim;
	PaddingTop: UDim = new UDim;
}

export class UIPageLayout extends UIGridStyleLayout implements UIPageLayout {
	readonly ClassName: keyof Instances = "UIPageLayout";
	Name: string = "UIPageLayout";
	Animated: boolean = true;
	Circular: boolean = false;
	EasingDirection: Enum.EasingDirection = Enum.EasingDirection.Out;
	EasingStyle: Enum.EasingStyle = Enum.EasingStyle.Back;
	GamepadInputEnabled: boolean = true;
	Padding: UDim = new UDim;
	ScrollWheelInputEnabled: boolean = true;
	TouchInputEnabled: boolean = true;
	TweenTime: number = 1;
}

export class UIScale extends UIComponent implements UIScale {
	readonly ClassName: keyof Instances = "UIScale";
	Name: string = "UIScale";
	Scale: number = 1;
}

export class UISizeConstraint extends UIConstraint implements UISizeConstraint {
	readonly ClassName: keyof Instances = "UISizeConstraint";
	Name: string = "UISizeConstraint";
	MaxSize: Vector2 = new Vector2(Infinity, Infinity);
	MinSize: Vector2 = new Vector2;
}

export class UIStroke extends UIComponent implements UIStroke {
	readonly ClassName: keyof Instances = "UIStroke";
	Name: string = "UIStroke";
	ApplyStrokeMode: Enum.ApplyStrokeMode = Enum.ApplyStrokeMode.Contextual;
	Color: Color3 = Color3.fromHex("000000");
	Enabled: boolean = true;
	LineJoinMode: Enum.LineJoinMode = Enum.LineJoinMode.Round;
	Thickness: number = 1;
	Transparency: number = 0;
}

export class UITableLayout extends UIGridStyleLayout implements UITableLayout {
	readonly ClassName: keyof Instances = "UITableLayout";
	Name: string = "UITableLayout";
	FillEmptySpaceColumns: boolean = false;
	FillEmptySpaceRows: boolean = false;
	MajorAxis: Enum.TableMajorAxis = Enum.TableMajorAxis.RowMajor;
	Padding: UDim2 = new UDim2;
}

export class UITextSizeConstraint extends UIConstraint implements UITextSizeConstraint {
	readonly ClassName: keyof Instances = "UITextSizeConstraint";
	Name: string = "UITextSizeConstraint";
	MaxTextSize: number = 100;
	MinTextSize: number = 1;
}

export const instanceConstructors: { [K in keyof CreatableInstances]: new () => Instances[K] } = {
	Frame: Frame,
	ImageButton: ImageButton,
	ImageLabel: ImageLabel,
	TextBox: TextBox,
	TextButton: TextButton,
	TextLabel: TextLabel,
	UIAspectRatioConstraint: UIAspectRatioConstraint,
	UICorner: UICorner,
	UIGradient: UIGradient,
	UIGridLayout: UIGridLayout,
	UIListLayout: UIListLayout,
	UIPadding: UIPadding,
	UIPageLayout: UIPageLayout,
	UIScale: UIScale,
	UISizeConstraint: UISizeConstraint,
	UIStroke: UIStroke,
	UITableLayout: UITableLayout,
	UITextSizeConstraint: UITextSizeConstraint,
}
