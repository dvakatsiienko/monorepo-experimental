<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@dva/utils](./utils.md) &gt; [useAsyncDataEffect](./utils.useasyncdataeffect.md)

## useAsyncDataEffect() function

<b>Signature:</b>

```typescript
export declare function useAsyncDataEffect<T>(getData: () => Promise<T>, options: {
    stateName: string;
    otherStatesToMonitor?: unknown[];
    setter: (arg: T) => void;
}): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  getData | () =&gt; Promise&lt;T&gt; |  |
|  options | { stateName: string; otherStatesToMonitor?: unknown\[\]; setter: (arg: T) =&gt; void; } |  |

<b>Returns:</b>

void
