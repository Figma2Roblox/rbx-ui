import {Enum} from './generated/enums'

export interface Vector2 {
	X: number;
	Y: number;
	Magnitude(): number;
	Unit(): Vector2;
	Cross(other: Vector2): number;
	Abs(): Vector2;
	Ceil(): Vector2;
	Floor(): Vector2;
	Sign(): Vector2;
	Angle(other: Vector2): number;
	Dot(other: Vector2): number;
	Lerp(other: Vector2, t: number): Vector2;
	Max(other: Vector2): Vector2;
	Min(other: Vector2): Vector2;
	FuzzyEq(other: Vector2, epsilon: number): boolean;
}

export class Vector2 implements Vector2 {
	X = 0;
	Y = 0;

	static zero = new Vector2(0, 0);
	static one = new Vector2(1, 1);
	static xAxis = new Vector2(0, 1);
	static yAxis = new Vector2(1, 0);

	constructor(x: number = 0, y: number = 0) {
		this.X = x;
		this.Y = y;
		return this;
	}

	static new = Vector2.constructor

	Magnitude(): number {
		return Math.sqrt(this.X * this.X + this.Y * this.Y);
	}

	Unit(): Vector2 {
		return new Vector2(this.X / this.Magnitude(), this.Y / this.Magnitude());
	}

	Cross(other: Vector2): number {
		return this.X * other.Y - this.Y * other.X;
	}

	Abs(): Vector2 {
		return new Vector2(Math.abs(this.X), Math.abs(this.Y));
	}

	Ceil(): Vector2 {
		return new Vector2(Math.ceil(this.X), Math.ceil(this.Y));
	}

	Floor(): Vector2 {
		return new Vector2(Math.floor(this.X), Math.floor(this.Y));
	}

	Sign(): Vector2 {
		return new Vector2(Math.sign(this.X), Math.sign(this.Y));
	}

	Angle(other: Vector2): number {
		return Math.acos(this.Dot(other) / (this.Magnitude() * other.Magnitude()));
	}

	Dot(other: Vector2): number {
		return this.X * other.X + this.Y * other.Y;
	}

	Lerp(other: Vector2, t: number): Vector2 {
		return new Vector2(this.X + (other.X - this.X) * t, this.Y + (other.Y - this.Y) * t);
	}

	Max(other: Vector2): Vector2 {
		return new Vector2(Math.max(this.X, other.X), Math.max(this.Y, other.Y));
	}

	Min(other: Vector2): Vector2 {
		return new Vector2(Math.min(this.X, other.X), Math.min(this.Y, other.Y));
	}

	FuzzyEq(other: Vector2, epsilon: number): boolean {
		return Math.abs(this.X - other.X) < epsilon && Math.abs(this.Y - other.Y) < epsilon;
	}

	ToLuaString(): string {
		if (this.X === 1 && this.Y === 1) {
			return "Vector2.one"
		} else if (this.X === 1 && this.Y === 0) {
			return `Vector2.xAxis`
		} else if (this.X === 0 && this.Y === 1) {
			return `Vector2.yAxis`
		} else if (this.X === 0 && this.Y === 0){
			return `Vector2.zero`
		} else {
			const x = this.X === Infinity ? "math.huge" : this.X;
			const y = this.Y === Infinity ? "math.huge" : this.Y;
			return `Vector2.new(${x}, ${y})`
		}
	}
}  

export interface UDim {
	Scale: number;
	Offset: number;
	add(other: UDim): UDim;
	sub(other: UDim): UDim;
}

export class UDim implements UDim {
	Scale = 0;
	Offset = 0;

	constructor(scale: number = 0, offset: number = 0) {
		this.Scale = scale;
		this.Offset = offset;
		return this;
	}

	static new = UDim.constructor

	add(other: UDim): UDim {
		return new UDim(this.Scale + other.Scale, this.Offset + other.Offset);
	}

	sub(other: UDim): UDim {
		return new UDim(this.Scale - other.Scale, this.Offset - other.Offset);
	}

	ToLuaString(): string {
		if (this.Scale === 0 && this.Offset === 0) {
			return "UDim.new()";
		} else {
			return `UDim.new(${this.Scale}, ${this.Offset})`;
		}
	}
}

export interface UDim2 {
	X: UDim;
	Y: UDim;
	Width: UDim;
	Height: UDim;
	Lerp(other: UDim2, t: number): UDim2;
	add(other: UDim2): UDim2;
	sub(other: UDim2): UDim2;
}

export class UDim2 implements UDim2 {
	X = new UDim();
	Y = new UDim();
	Width = new UDim();
	Height = new UDim();

	constructor(...args: [] | [xUdim: UDim, yUdim: UDim] | [xScale: number, xOffset: number, yScale: number, yOffset: number]) {
		if (args[0] instanceof UDim && args[1] instanceof UDim) {
			this.X = args[0];
			this.Y = args[1];
		} else if (typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[2] === 'number' && typeof args[3] === 'number') {
			this.X = new UDim(args[0], args[1]);
			this.Y = new UDim(args[3], args[4]);
		} else {
			this.X = new UDim();
			this.Y = new UDim();
		}
		return this;
	}

	static new = UDim2.constructor

	static fromOffset(x: number, y: number): UDim2 {
		return new UDim2(
			new UDim(0, x),
			new UDim(0, y)
		);
	}

	static fromScale(x: number, y: number): UDim2 {
		return new UDim2(
			new UDim(x, 0),
			new UDim(y, 0)
		);
	}

	Lerp(other: UDim2, t: number): UDim2 {
		const vectorX = this.X.add(other.X.sub(this.X));
		const vectorY = this.Y.add(other.Y.sub(this.Y));

		return new UDim2(
			vectorX.Scale * t,
			vectorX.Offset * t,
			vectorY.Scale * t,
			vectorY.Offset * t
		);
	}

	add(other: UDim2): UDim2 {
		return new UDim2(
			this.X.add(other.X),
			this.Y.add(other.Y)
		);
	}

	sub(other: UDim2): UDim2 {
		return new UDim2(
			this.X.sub(other.X),
			this.Y.sub(other.Y)
		);
	}

	ToLuaString(): string {
		const usesScale = this.X.Scale !== 0 || this.Y.Scale !== 0;
		const usesOffset = this.X.Offset !== 0 || this.Y.Offset !== 0;

		if (usesScale && usesOffset) {
			return `UDim2.new(${this.X.Scale}, ${this.X.Offset}, ${this.Y.Scale}, ${this.Y.Offset})`;
		} else if (usesScale) {
			return `UDim2.fromScale(${this.X.Scale}, ${this.Y.Scale})`;
		} else if (usesOffset) {
			return `UDim2.fromOffset(${this.X.Offset}, ${this.Y.Offset})`;
		} else {
			return "UDim2.new()";
		}
	}
}

export interface Rect {
	Width: number;
	Height: number;
	Min: Vector2;
	Max: Vector2;
}

export class Rect implements Rect {
	Width = 0;
	Height = 0;
	Min = new Vector2();
	Max = new Vector2();

	constructor(...args: [] | [min: Vector2, max: Vector2] | [minX: number, minY: number, maxX: number, maxY: number]) {
		if (args[0] instanceof Vector2 && args[1] instanceof Vector2) {
			this.Min = args[0];
			this.Max = args[1];
		} else if (typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[2] === 'number' && typeof args[3] === 'number') {
			this.Min = new Vector2(args[0], args[1]);
			this.Max = new Vector2(args[2], args[3]);
		}
		return this;
	}

	static new = Rect.constructor

	ToLuaString(): string {
		if (this.Min.X === 0 && this.Min.Y === 0 && this.Max.X === 0 && this.Max.Y === 0) {
			return "Rect.new()";
		} else {
			return `Rect.new(${this.Min.X}, ${this.Min.Y}, ${this.Max.X}, ${this.Max.Y})`;
		}
	}
}

export interface Color3 {
	R: number;
	G: number;
	B: number;
	Lerp(other: Color3, t: number): Color3;
	ToHsv(): [number, number, number];
	ToHex(): string;
}

export class Color3 implements Color3 {
	R = 0;
	G = 0;
	B = 0;

	constructor(r: number = 0, g: number = 0, b: number = 0) {
		this.R = r;
		this.G = g;
		this.B = b;
		return this;
	}

	static new = Color3.constructor

	static fromRGB(r: number, g: number, b: number): Color3 {
		return new Color3(r / 255, g / 255, b / 255);
	}

	static fromHSV(h: number, s: number, v: number): Color3 {
		const c = v * s;
		const x = c * (1 - Math.abs((h * 6) % 2 - 1));
		const m = v - c;
		let r = 0, g = 0, b = 0;

		if (h < 1 / 6) {
			r = c;
			g = x;
		} else if (h < 2 / 6) {
			r = x;
			g = c;
		} else if (h < 3 / 6) {
			g = c;
			b = x;
		} else if (h < 4 / 6) {
			g = x;
			b = c;
		} else if (h < 5 / 6) {
			r = x;
			b = c;
		} else {
			r = c;
			b = x;
		}

		return new Color3(r + m, g + m, b + m);
	}

	static fromHex(hex: string): Color3 {
		const sanitizedHex = hex.replace(/[^0-9A-Fa-f]/g, '');
		const hexValue = parseInt(sanitizedHex, 16);
		const r = (hexValue >> 16) & 255;
		const g = (hexValue >> 8) & 255;
		const b = hexValue & 255;
		return new Color3(r / 255, g / 255, b / 255);
	}

	Lerp(other: Color3, t: number): Color3 {
		const r = this.R + (other.R - this.R) * t;
		const g = this.G + (other.G - this.G) * t;
		const b = this.B + (other.B - this.B) * t;
		return new Color3(r, g, b);
	}

	ToHsv(): [number, number, number] {
		const r = this.R;
		const g = this.G;
		const b = this.B;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const delta = max - min;

		let h = 0;
		let s = 0;
		let v = max;

		if (delta !== 0) {
			s = delta / max;

			if (max === r) {
				h = (g - b) / delta + (g < b ? 6 : 0);
			} else if (max === g) {
				h = (b - r) / delta + 2;
			} else {
				h = (r - g) / delta + 4;
			}

			h /= 6;
		}

		return [h, s, v];
	}

	ToHex(): string {
		const r = Math.round(this.R).toString(16).padStart(2, '0');
		const g = Math.round(this.G).toString(16).padStart(2, '0');
		const b = Math.round(this.B).toString(16).padStart(2, '0');
		return `#${r}${g}${b}`;
	}

	ToLuaString(): string {
		if (this.R == 1 && this.G == 1 && this.B == 1) {
			return "Color3.new()";
		} else {
			return `Color3.fromHex(${this.ToHex()})`;
		}
	}
}

export interface NumberSequenceKeypoint {
	Time: number;
	Value: number;
	Envelope: number;
}

export class NumberSequenceKeypoint implements NumberSequenceKeypoint {
	Time = 0;
	Value = 0;
	Envelope = 0;

	constructor(time: number = 0, value: number = 0, envelope: number = 0) {
		this.Time = time;
		this.Value = value;
		this.Envelope = envelope;
		return this;
	}

	static new = NumberSequenceKeypoint.constructor

	ToLuaString(): string {
		if (this.Envelope === 0) {
			return `NumberSequenceKeypoint.new(${this.Time}, ${this.Value})`;
		} else {
			return `NumberSequenceKeypoint.new(${this.Time}, ${this.Value}, ${this.Envelope})`;
		}
	}
}

export interface NumberSequence {
	Keypoints: NumberSequenceKeypoint[];
}

export class NumberSequence implements NumberSequence {
	Keypoints: NumberSequenceKeypoint[] = [];

	constructor(...args: [n: number] | [n0: number, n1: number] | [keypoints: NumberSequenceKeypoint[]]) {
		if (typeof args[0] === 'number' && typeof args[1] === 'number') {
			this.Keypoints = [
				new NumberSequenceKeypoint(0, args[0]),
				new NumberSequenceKeypoint(1, args[1])
			];
		} else if (typeof args[0] === 'number') {
			this.Keypoints = [
				new NumberSequenceKeypoint(0, args[0]),
				new NumberSequenceKeypoint(1, args[0])
			];
		} else {
			this.Keypoints = args[0];
		}
		return this;
	}

	ToLuaString(): string {
		const n0 = this.Keypoints[0];
		const n1 = this.Keypoints[1];

		if (this.Keypoints.length === 2 && n0.Time === 0 && n1.Time === 1) {
			if (n0.Value === n1.Value) {
				return `NumberSequence.new(${n0.Value})`;
			} else {
				return `NumberSequence.new(${n0.Value}, ${n1.Value})`;
			}
		} else if (this.Keypoints.length >= 2) {
			return `NumberSequence.new({\n${this.Keypoints.map(k => k.ToLuaString()).join(',\n\t')}\n})`;
		} else {
			return `NumberSequence.new({${this.Keypoints[0].Value}})`;
		}
	}

	static new = NumberSequence.constructor
}

export interface ColorSequenceKeypoint {
	Time: number;
	Value: Color3;
}

export class ColorSequenceKeypoint implements ColorSequenceKeypoint {
	Time = 0;
	Value = new Color3();

	constructor(time: number = 0, color: Color3 = new Color3()) {
		this.Time = time;
		this.Value = color;
		return this;
	}

	static new = ColorSequenceKeypoint.constructor

	ToLuaString(): string {
		return `ColorSequenceKeypoint.new(${this.Time}, ${this.Value.ToLuaString()})`;
	}
}

export interface ColorSequence {
	Keypoints: ColorSequenceKeypoint[];
}

export class ColorSequence implements ColorSequence {
	Keypoints: ColorSequenceKeypoint[] = [];

	constructor(...args: [c: Color3] | [c0: Color3, c1: Color3] | [keypoints: ColorSequenceKeypoint[]]) {
		if (args[0] instanceof Color3 && args[1] instanceof Color3) {
			this.Keypoints = [
				new ColorSequenceKeypoint(0, args[0]),
				new ColorSequenceKeypoint(1, args[1])
			];
		} else if (args[0] instanceof Color3) {
			this.Keypoints = [
				new ColorSequenceKeypoint(0, args[0]),
				new ColorSequenceKeypoint(1, args[0])
			];
		} else {
			this.Keypoints = args[0];
		}
		return this;
	}

	static new = ColorSequence.constructor

	ToLuaString(): string {
		const c0 = this.Keypoints[0];
		const c1 = this.Keypoints[1];

		if (this.Keypoints.length === 2 && c0.Time === 0 && c1.Time === 1) {
			if (c0.Value.ToHex() === c1.Value.ToHex()) {
				return `ColorSequence.new(${c0.Value.ToLuaString()})`;
			} else {
				return `ColorSequence.new(${c0.Value.ToLuaString()}, ${c1.Value.ToLuaString()})`;
			}
		} else if (this.Keypoints.length >= 2) {
			return `ColorSequence.new({\n${this.Keypoints.map(c => c.ToLuaString()).join(',\n\t')}\n})`;
		} else {
			return `ColorSequence.new({${this.Keypoints[0].Value.ToLuaString}})`;
		}
	}
}

export interface Font {
	Family: string;
	Weight: Enum.FontWeight
	Style: Enum.FontStyle;
}

export class Font implements Font {
	Family: string;
	Weight = Enum.FontWeight.Regular;
	Style = Enum.FontStyle.Normal;

	constructor(family: string, weight: Enum.FontWeight = Enum.FontWeight.Regular, style: Enum.FontStyle = Enum.FontStyle.Normal) {
		this.Family = family;
		this.Weight = weight;
		this.Style = style;
		return this;
	}

	static new = Font.constructor

	static fromName(name: string, weight: Enum.FontWeight = Enum.FontWeight.Regular, style: Enum.FontStyle = Enum.FontStyle.Normal): Font {
		return new Font(`rbxasset://fonts/families/${name}}.json`, weight, style);
	}

	static fromId(id: number, weight: Enum.FontWeight = Enum.FontWeight.Regular, style: Enum.FontStyle = Enum.FontStyle.Normal): Font {
		return new Font(`"rbxassetid://${id}}"`, weight, style);
	}

	ToLuaString(): string {
		let weightAndStyle = ""
		if (this.Weight !== Enum.FontWeight.Regular || this.Style !== Enum.FontStyle.Normal) {
			weightAndStyle = `, ${this.Weight.ToLuaString()}, ${this.Style.ToLuaString()}`
		}

		const nameMatch = this.Family.match(/rbxasset:\/\/fonts\/families\/(\w+)\.json/)
		const idMatch = this.Family.match(/rbxassetid:\/\/(\d+)/)

		if (idMatch !== null && idMatch[1] !== undefined) {
			return `Font.fromId(${idMatch[1]}${weightAndStyle})`;
		} else if (nameMatch !== null && nameMatch[1] !== undefined) {
			return `Font.fromName("${nameMatch[1]}"${weightAndStyle})`;
		} else {
			return `Font.new("${this.Family}"${weightAndStyle})`;
		}
	}
}