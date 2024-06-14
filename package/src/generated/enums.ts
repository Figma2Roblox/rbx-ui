import { EnumItems, createEnumItems, EnumItem } from "../enumsHelper"
export { EnumItems, EnumItem }

export namespace Enum {
	export namespace FontWeight {
		const enumItems = createEnumItems("FontWeight", [
			{ Name: "Thin", Value: 100 },
			{ Name: "Bold", Value: 700 },
			{ Name: "ExtraLight", Value: 200 },
			{ Name: "Regular", Value: 400 },
			{ Name: "Light", Value: 300 },
			{ Name: "Medium", Value: 500 },
			{ Name: "Heavy", Value: 900 },
			{ Name: "SemiBold", Value: 600 },
			{ Name: "ExtraBold", Value: 800 },
		])
		
		export const [Thin, Bold, ExtraLight, Regular, Light, Medium, Heavy, SemiBold, ExtraBold] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FontWeight = EnumItem<"FontWeight">
	
	export namespace FontStyle {
		const enumItems = createEnumItems("FontStyle", [
			{ Name: "Italic", Value: 1 },
			{ Name: "Normal", Value: 0 },
		])
		
		export const [Italic, Normal] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FontStyle = EnumItem<"FontStyle">
	
	export namespace SelectionBehavior {
		const enumItems = createEnumItems("SelectionBehavior", [
			{ Name: "Escape", Value: 0 },
			{ Name: "Stop", Value: 1 },
		])
		
		export const [Escape, Stop] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type SelectionBehavior = EnumItem<"SelectionBehavior">
	
	export namespace SizeConstraint {
		const enumItems = createEnumItems("SizeConstraint", [
			{ Name: "RelativeXY", Value: 0 },
			{ Name: "RelativeXX", Value: 1 },
			{ Name: "RelativeYY", Value: 2 },
		])
		
		export const [RelativeXY, RelativeXX, RelativeYY] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type SizeConstraint = EnumItem<"SizeConstraint">
	
	export namespace BorderMode {
		const enumItems = createEnumItems("BorderMode", [
			{ Name: "Inset", Value: 2 },
			{ Name: "Middle", Value: 1 },
			{ Name: "Outline", Value: 0 },
		])
		
		export const [Inset, Middle, Outline] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type BorderMode = EnumItem<"BorderMode">
	
	export namespace AutomaticSize {
		const enumItems = createEnumItems("AutomaticSize", [
			{ Name: "None", Value: 0 },
			{ Name: "X", Value: 1 },
			{ Name: "XY", Value: 3 },
			{ Name: "Y", Value: 2 },
		])
		
		export const [None, X, XY, Y] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type AutomaticSize = EnumItem<"AutomaticSize">
	
	export namespace FrameStyle {
		const enumItems = createEnumItems("FrameStyle", [
			{ Name: "RobloxSquare", Value: 2 },
			{ Name: "ChatBlue", Value: 1 },
			{ Name: "ChatRed", Value: 5 },
			{ Name: "Custom", Value: 0 },
			{ Name: "RobloxRound", Value: 3 },
			{ Name: "ChatGreen", Value: 4 },
			{ Name: "DropShadow", Value: 6 },
		])
		
		export const [RobloxSquare, ChatBlue, ChatRed, Custom, RobloxRound, ChatGreen, DropShadow] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FrameStyle = EnumItem<"FrameStyle">
	
	export namespace ButtonStyle {
		const enumItems = createEnumItems("ButtonStyle", [
			{ Name: "RobloxRoundDropdownButton", Value: 5 },
			{ Name: "RobloxButtonDefault", Value: 1 },
			{ Name: "RobloxButton", Value: 2 },
			{ Name: "Custom", Value: 0 },
			{ Name: "RobloxRoundButton", Value: 3 },
			{ Name: "RobloxRoundDefaultButton", Value: 4 },
		])
		
		export const [RobloxRoundDropdownButton, RobloxButtonDefault, RobloxButton, Custom, RobloxRoundButton, RobloxRoundDefaultButton] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ButtonStyle = EnumItem<"ButtonStyle">
	
	export namespace ResamplerMode {
		const enumItems = createEnumItems("ResamplerMode", [
			{ Name: "Pixelated", Value: 1 },
			{ Name: "Default", Value: 0 },
		])
		
		export const [Pixelated, Default] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ResamplerMode = EnumItem<"ResamplerMode">
	
	export namespace ScaleType {
		const enumItems = createEnumItems("ScaleType", [
			{ Name: "Tile", Value: 2 },
			{ Name: "Crop", Value: 4 },
			{ Name: "Stretch", Value: 0 },
			{ Name: "Fit", Value: 3 },
			{ Name: "Slice", Value: 1 },
		])
		
		export const [Tile, Crop, Stretch, Fit, Slice] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ScaleType = EnumItem<"ScaleType">
	
	export namespace TextDirection {
		const enumItems = createEnumItems("TextDirection", [
			{ Name: "Auto", Value: 0 },
			{ Name: "LeftToRight", Value: 1 },
			{ Name: "RightToLeft", Value: 2 },
		])
		
		export const [Auto, LeftToRight, RightToLeft] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextDirection = EnumItem<"TextDirection">
	
	export namespace TextYAlignment {
		const enumItems = createEnumItems("TextYAlignment", [
			{ Name: "Bottom", Value: 2 },
			{ Name: "Center", Value: 1 },
			{ Name: "Top", Value: 0 },
		])
		
		export const [Bottom, Center, Top] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextYAlignment = EnumItem<"TextYAlignment">
	
	export namespace TextTruncate {
		const enumItems = createEnumItems("TextTruncate", [
			{ Name: "None", Value: 0 },
			{ Name: "AtEnd", Value: 1 },
		])
		
		export const [None, AtEnd] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextTruncate = EnumItem<"TextTruncate">
	
	export namespace TextXAlignment {
		const enumItems = createEnumItems("TextXAlignment", [
			{ Name: "Left", Value: 0 },
			{ Name: "Right", Value: 1 },
			{ Name: "Center", Value: 2 },
		])
		
		export const [Left, Right, Center] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextXAlignment = EnumItem<"TextXAlignment">
	
	export namespace AspectType {
		const enumItems = createEnumItems("AspectType", [
			{ Name: "FitWithinMaxSize", Value: 0 },
			{ Name: "ScaleWithParentSize", Value: 1 },
		])
		
		export const [FitWithinMaxSize, ScaleWithParentSize] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type AspectType = EnumItem<"AspectType">
	
	export namespace DominantAxis {
		const enumItems = createEnumItems("DominantAxis", [
			{ Name: "Height", Value: 1 },
			{ Name: "Width", Value: 0 },
		])
		
		export const [Height, Width] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type DominantAxis = EnumItem<"DominantAxis">
	
	export namespace HorizontalAlignment {
		const enumItems = createEnumItems("HorizontalAlignment", [
			{ Name: "Left", Value: 1 },
			{ Name: "Right", Value: 2 },
			{ Name: "Center", Value: 0 },
		])
		
		export const [Left, Right, Center] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type HorizontalAlignment = EnumItem<"HorizontalAlignment">
	
	export namespace FillDirection {
		const enumItems = createEnumItems("FillDirection", [
			{ Name: "Horizontal", Value: 0 },
			{ Name: "Vertical", Value: 1 },
		])
		
		export const [Horizontal, Vertical] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FillDirection = EnumItem<"FillDirection">
	
	export namespace VerticalAlignment {
		const enumItems = createEnumItems("VerticalAlignment", [
			{ Name: "Bottom", Value: 2 },
			{ Name: "Top", Value: 1 },
			{ Name: "Center", Value: 0 },
		])
		
		export const [Bottom, Top, Center] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type VerticalAlignment = EnumItem<"VerticalAlignment">
	
	export namespace SortOrder {
		const enumItems = createEnumItems("SortOrder", [
			{ Name: "Custom", Value: 1 },
			{ Name: "Name", Value: 0 },
			{ Name: "LayoutOrder", Value: 2 },
		])
		
		export const [Custom, Name, LayoutOrder] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type SortOrder = EnumItem<"SortOrder">
	
	export namespace StartCorner {
		const enumItems = createEnumItems("StartCorner", [
			{ Name: "TopLeft", Value: 0 },
			{ Name: "BottomLeft", Value: 2 },
			{ Name: "BottomRight", Value: 3 },
			{ Name: "TopRight", Value: 1 },
		])
		
		export const [TopLeft, BottomLeft, BottomRight, TopRight] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type StartCorner = EnumItem<"StartCorner">
	
	export namespace UIFlexAlignment {
		const enumItems = createEnumItems("UIFlexAlignment", [
			{ Name: "SpaceEvenly", Value: 4 },
			{ Name: "SpaceAround", Value: 2 },
			{ Name: "None", Value: 0 },
			{ Name: "Fill", Value: 1 },
			{ Name: "SpaceBetween", Value: 3 },
		])
		
		export const [SpaceEvenly, SpaceAround, None, Fill, SpaceBetween] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type UIFlexAlignment = EnumItem<"UIFlexAlignment">
	
	export namespace ItemLineAlignment {
		const enumItems = createEnumItems("ItemLineAlignment", [
			{ Name: "Automatic", Value: 0 },
			{ Name: "End", Value: 3 },
			{ Name: "Stretch", Value: 4 },
			{ Name: "Center", Value: 2 },
			{ Name: "Start", Value: 1 },
		])
		
		export const [Automatic, End, Stretch, Center, Start] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ItemLineAlignment = EnumItem<"ItemLineAlignment">
	
	export namespace EasingStyle {
		const enumItems = createEnumItems("EasingStyle", [
			{ Name: "Back", Value: 2 },
			{ Name: "Quart", Value: 4 },
			{ Name: "Quad", Value: 3 },
			{ Name: "Bounce", Value: 6 },
			{ Name: "Cubic", Value: 10 },
			{ Name: "Elastic", Value: 7 },
			{ Name: "Quint", Value: 5 },
			{ Name: "Circular", Value: 9 },
			{ Name: "Exponential", Value: 8 },
			{ Name: "Linear", Value: 0 },
			{ Name: "Sine", Value: 1 },
		])
		
		export const [Back, Quart, Quad, Bounce, Cubic, Elastic, Quint, Circular, Exponential, Linear, Sine] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type EasingStyle = EnumItem<"EasingStyle">
	
	export namespace EasingDirection {
		const enumItems = createEnumItems("EasingDirection", [
			{ Name: "Out", Value: 1 },
			{ Name: "InOut", Value: 2 },
			{ Name: "In", Value: 0 },
		])
		
		export const [Out, InOut, In] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type EasingDirection = EnumItem<"EasingDirection">
	
	export namespace ApplyStrokeMode {
		const enumItems = createEnumItems("ApplyStrokeMode", [
			{ Name: "Border", Value: 1 },
			{ Name: "Contextual", Value: 0 },
		])
		
		export const [Border, Contextual] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ApplyStrokeMode = EnumItem<"ApplyStrokeMode">
	
	export namespace LineJoinMode {
		const enumItems = createEnumItems("LineJoinMode", [
			{ Name: "Miter", Value: 2 },
			{ Name: "Round", Value: 0 },
			{ Name: "Bevel", Value: 1 },
		])
		
		export const [Miter, Round, Bevel] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type LineJoinMode = EnumItem<"LineJoinMode">
	
	export namespace TableMajorAxis {
		const enumItems = createEnumItems("TableMajorAxis", [
			{ Name: "ColumnMajor", Value: 1 },
			{ Name: "RowMajor", Value: 0 },
		])
		
		export const [ColumnMajor, RowMajor] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TableMajorAxis = EnumItem<"TableMajorAxis">
	
}
