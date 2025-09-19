// import "../global.css"
import { View } from "react-native"
// Forces nativewind to be included in the bundle
import 'nativewind'

export function sum(a: number, b: number): number {
    return a + b
}

export function MyComponent() {
    return <View className="bg-red-500">Hello world</View>
}