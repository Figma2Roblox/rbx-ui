import { EnumItems, createEnumItems, EnumItem } from "../enumsHelper"
export { EnumItems, EnumItem }

export namespace Enum {
	export namespace FontWeight {
		const enumItems = createEnumItems("FontWeight", [
			{ Name: "ExtraLight", Value: 200 },
			{ Name: "Bold", Value: 700 },
			{ Name: "ExtraBold", Value: 800 },
			{ Name: "Medium", Value: 500 },
			{ Name: "Heavy", Value: 900 },
			{ Name: "SemiBold", Value: 600 },
			{ Name: "Thin", Value: 100 },
			{ Name: "Regular", Value: 400 },
			{ Name: "Light", Value: 300 },
		])
		
		export const [ExtraLight, Bold, ExtraBold, Medium, Heavy, SemiBold, Thin, Regular, Light] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FontWeight = EnumItem<"FontWeight">
	
	export namespace FontStyle {
		const enumItems = createEnumItems("FontStyle", [
			{ Name: "Normal", Value: 0 },
			{ Name: "Italic", Value: 1 },
		])
		
		export const [Normal, Italic] = enumItems
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
			{ Name: "Y", Value: 2 },
			{ Name: "None", Value: 0 },
			{ Name: "X", Value: 1 },
			{ Name: "XY", Value: 3 },
		])
		
		export const [Y, None, X, XY] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type AutomaticSize = EnumItem<"AutomaticSize">
	
	export namespace FrameStyle {
		const enumItems = createEnumItems("FrameStyle", [
			{ Name: "Custom", Value: 0 },
			{ Name: "RobloxRound", Value: 3 },
			{ Name: "ChatBlue", Value: 1 },
			{ Name: "ChatRed", Value: 5 },
			{ Name: "DropShadow", Value: 6 },
			{ Name: "RobloxSquare", Value: 2 },
			{ Name: "ChatGreen", Value: 4 },
		])
		
		export const [Custom, RobloxRound, ChatBlue, ChatRed, DropShadow, RobloxSquare, ChatGreen] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FrameStyle = EnumItem<"FrameStyle">
	
	export namespace ButtonStyle {
		const enumItems = createEnumItems("ButtonStyle", [
			{ Name: "Custom", Value: 0 },
			{ Name: "RobloxRoundDefaultButton", Value: 4 },
			{ Name: "RobloxRoundButton", Value: 3 },
			{ Name: "RobloxRoundDropdownButton", Value: 5 },
			{ Name: "RobloxButton", Value: 2 },
			{ Name: "RobloxButtonDefault", Value: 1 },
		])
		
		export const [Custom, RobloxRoundDefaultButton, RobloxRoundButton, RobloxRoundDropdownButton, RobloxButton, RobloxButtonDefault] = enumItems
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
			{ Name: "Fit", Value: 3 },
			{ Name: "Crop", Value: 4 },
			{ Name: "Stretch", Value: 0 },
			{ Name: "Slice", Value: 1 },
			{ Name: "Tile", Value: 2 },
		])
		
		export const [Fit, Crop, Stretch, Slice, Tile] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ScaleType = EnumItem<"ScaleType">
	
	export namespace TextDirection {
		const enumItems = createEnumItems("TextDirection", [
			{ Name: "LeftToRight", Value: 1 },
			{ Name: "Auto", Value: 0 },
			{ Name: "RightToLeft", Value: 2 },
		])
		
		export const [LeftToRight, Auto, RightToLeft] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextDirection = EnumItem<"TextDirection">
	
	export namespace TextYAlignment {
		const enumItems = createEnumItems("TextYAlignment", [
			{ Name: "Center", Value: 1 },
			{ Name: "Top", Value: 0 },
			{ Name: "Bottom", Value: 2 },
		])
		
		export const [Center, Top, Bottom] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextYAlignment = EnumItem<"TextYAlignment">
	
	export namespace TextTruncate {
		const enumItems = createEnumItems("TextTruncate", [
			{ Name: "AtEnd", Value: 1 },
			{ Name: "None", Value: 0 },
		])
		
		export const [AtEnd, None] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextTruncate = EnumItem<"TextTruncate">
	
	export namespace TextXAlignment {
		const enumItems = createEnumItems("TextXAlignment", [
			{ Name: "Right", Value: 1 },
			{ Name: "Center", Value: 2 },
			{ Name: "Left", Value: 0 },
		])
		
		export const [Right, Center, Left] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextXAlignment = EnumItem<"TextXAlignment">
	
	export namespace AspectType {
		const enumItems = createEnumItems("AspectType", [
			{ Name: "ScaleWithParentSize", Value: 1 },
			{ Name: "FitWithinMaxSize", Value: 0 },
		])
		
		export const [ScaleWithParentSize, FitWithinMaxSize] = enumItems
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
			{ Name: "Right", Value: 2 },
			{ Name: "Center", Value: 0 },
			{ Name: "Left", Value: 1 },
		])
		
		export const [Right, Center, Left] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type HorizontalAlignment = EnumItem<"HorizontalAlignment">
	
	export namespace FillDirection {
		const enumItems = createEnumItems("FillDirection", [
			{ Name: "Vertical", Value: 1 },
			{ Name: "Horizontal", Value: 0 },
		])
		
		export const [Vertical, Horizontal] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FillDirection = EnumItem<"FillDirection">
	
	export namespace VerticalAlignment {
		const enumItems = createEnumItems("VerticalAlignment", [
			{ Name: "Bottom", Value: 2 },
			{ Name: "Center", Value: 0 },
			{ Name: "Top", Value: 1 },
		])
		
		export const [Bottom, Center, Top] = enumItems
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
			{ Name: "BottomRight", Value: 3 },
			{ Name: "BottomLeft", Value: 2 },
			{ Name: "TopRight", Value: 1 },
			{ Name: "TopLeft", Value: 0 },
		])
		
		export const [BottomRight, BottomLeft, TopRight, TopLeft] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type StartCorner = EnumItem<"StartCorner">
	
	export namespace UIFlexAlignment {
		const enumItems = createEnumItems("UIFlexAlignment", [
			{ Name: "SpaceBetween", Value: 3 },
			{ Name: "None", Value: 0 },
			{ Name: "SpaceAround", Value: 2 },
			{ Name: "SpaceEvenly", Value: 4 },
			{ Name: "Fill", Value: 1 },
		])
		
		export const [SpaceBetween, None, SpaceAround, SpaceEvenly, Fill] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type UIFlexAlignment = EnumItem<"UIFlexAlignment">
	
	export namespace ItemLineAlignment {
		const enumItems = createEnumItems("ItemLineAlignment", [
			{ Name: "Automatic", Value: 0 },
			{ Name: "End", Value: 3 },
			{ Name: "Center", Value: 2 },
			{ Name: "Start", Value: 1 },
			{ Name: "Stretch", Value: 4 },
		])
		
		export const [Automatic, End, Center, Start, Stretch] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ItemLineAlignment = EnumItem<"ItemLineAlignment">
	
	export namespace EasingStyle {
		const enumItems = createEnumItems("EasingStyle", [
			{ Name: "Circular", Value: 9 },
			{ Name: "Exponential", Value: 8 },
			{ Name: "Quart", Value: 4 },
			{ Name: "Cubic", Value: 10 },
			{ Name: "Sine", Value: 1 },
			{ Name: "Back", Value: 2 },
			{ Name: "Bounce", Value: 6 },
			{ Name: "Linear", Value: 0 },
			{ Name: "Quad", Value: 3 },
			{ Name: "Quint", Value: 5 },
			{ Name: "Elastic", Value: 7 },
		])
		
		export const [Circular, Exponential, Quart, Cubic, Sine, Back, Bounce, Linear, Quad, Quint, Elastic] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type EasingStyle = EnumItem<"EasingStyle">
	
	export namespace EasingDirection {
		const enumItems = createEnumItems("EasingDirection", [
			{ Name: "In", Value: 0 },
			{ Name: "InOut", Value: 2 },
			{ Name: "Out", Value: 1 },
		])
		
		export const [In, InOut, Out] = enumItems
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
			{ Name: "Bevel", Value: 1 },
			{ Name: "Miter", Value: 2 },
			{ Name: "Round", Value: 0 },
		])
		
		export const [Bevel, Miter, Round] = enumItems
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
