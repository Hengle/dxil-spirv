#version 460
layout(vertices = 4) out;

layout(location = 0) in float VSValue[];
layout(location = 0) out float HSValue[4];

void main()
{
    HSValue[gl_InvocationID] = (VSValue[1u] + VSValue[0u]) + VSValue[2u];
}


#if 0
// LLVM disassembly
target datalayout = "e-m:e-p:32:32-i1:32-i8:32-i16:32-i32:32-i64:64-f16:32-f32:32-f64:64-n8:16:32:64"
target triple = "dxil-ms-dx"

define void @main() {
  %1 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 0)
  %2 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 1)
  %3 = fadd fast float %2, %1
  %4 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 2)
  %5 = fadd fast float %3, %4
  call void @dx.op.storeOutput.f32(i32 5, i32 0, i32 0, i8 0, float %5)
  ret void
}

define void @"\01?main_patch@@YA?AUPatchConstant@@V?$OutputPatch@UHSControlPoint@@$03@@V?$InputPatch@UVSControlPoint@@$04@@@Z"() {
  %1 = call float @dx.op.loadOutputControlPoint.f32(i32 103, i32 0, i32 0, i8 0, i32 0)
  call void @dx.op.storePatchConstant.f32(i32 106, i32 1, i32 0, i8 0, float %1)
  %2 = call float @dx.op.loadOutputControlPoint.f32(i32 103, i32 0, i32 0, i8 0, i32 1)
  call void @dx.op.storePatchConstant.f32(i32 106, i32 1, i32 1, i8 0, float %2)
  %3 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 0)
  call void @dx.op.storePatchConstant.f32(i32 106, i32 0, i32 0, i8 0, float %3)
  %4 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 1)
  call void @dx.op.storePatchConstant.f32(i32 106, i32 0, i32 1, i8 0, float %4)
  %5 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 2)
  call void @dx.op.storePatchConstant.f32(i32 106, i32 0, i32 2, i8 0, float %5)
  %6 = fadd fast float %1, %3
  call void @dx.op.storePatchConstant.f32(i32 106, i32 0, i32 3, i8 0, float %6)
  ret void
}

; Function Attrs: nounwind readnone
declare float @dx.op.loadInput.f32(i32, i32, i32, i8, i32) #0

; Function Attrs: nounwind
declare void @dx.op.storeOutput.f32(i32, i32, i32, i8, float) #1

; Function Attrs: nounwind
declare void @dx.op.storePatchConstant.f32(i32, i32, i32, i8, float) #1

; Function Attrs: nounwind readnone
declare float @dx.op.loadOutputControlPoint.f32(i32, i32, i32, i8, i32) #0

attributes #0 = { nounwind readnone }
attributes #1 = { nounwind }

!llvm.ident = !{!0}
!dx.version = !{!1}
!dx.valver = !{!2}
!dx.shaderModel = !{!3}
!dx.viewIdState = !{!4}
!dx.entryPoints = !{!5}

!0 = !{!"clang version 3.7 (tags/RELEASE_370/final)"}
!1 = !{i32 1, i32 0}
!2 = !{i32 1, i32 5}
!3 = !{!"hs", i32 6, i32 0}
!4 = !{[5 x i32] [i32 1, i32 1, i32 1, i32 24, i32 8947848]}
!5 = !{void ()* @main, !"main", !6, null, !18}
!6 = !{!7, !11, !13}
!7 = !{!8}
!8 = !{i32 0, !"VSValue", i8 9, i8 0, !9, i8 2, i32 1, i8 1, i32 0, i8 0, !10}
!9 = !{i32 0}
!10 = !{i32 3, i32 1}
!11 = !{!12}
!12 = !{i32 0, !"HSValue", i8 9, i8 0, !9, i8 2, i32 1, i8 1, i32 0, i8 0, !10}
!13 = !{!14, !16}
!14 = !{i32 0, !"SV_TessFactor", i8 9, i8 25, !15, i8 0, i32 4, i8 1, i32 0, i8 3, !10}
!15 = !{i32 0, i32 1, i32 2, i32 3}
!16 = !{i32 1, !"SV_InsideTessFactor", i8 9, i8 26, !17, i8 0, i32 2, i8 1, i32 4, i8 3, !10}
!17 = !{i32 0, i32 1}
!18 = !{i32 3, !19}
!19 = !{void ()* @"\01?main_patch@@YA?AUPatchConstant@@V?$OutputPatch@UHSControlPoint@@$03@@V?$InputPatch@UVSControlPoint@@$04@@@Z", i32 5, i32 4, i32 3, i32 1, i32 3, float 6.400000e+01}
#endif
#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 34
; Schema: 0
OpCapability Shader
OpCapability Tessellation
OpMemoryModel Logical GLSL450
OpEntryPoint TessellationControl %3 "main" %10 %14 %30
OpExecutionMode %3 Quads
OpExecutionMode %3 VertexOrderCw
OpExecutionMode %3 OutputVertices 4
OpName %3 "main"
OpName %10 "VSValue"
OpName %14 "HSValue"
OpDecorate %10 Location 0
OpDecorate %14 Location 0
OpDecorate %30 BuiltIn InvocationId
%1 = OpTypeVoid
%2 = OpTypeFunction %1
%5 = OpTypeFloat 32
%6 = OpTypeInt 32 0
%7 = OpConstant %6 5
%8 = OpTypeArray %5 %7
%9 = OpTypePointer Input %8
%10 = OpVariable %9 Input
%11 = OpConstant %6 4
%12 = OpTypeArray %5 %11
%13 = OpTypePointer Output %12
%14 = OpVariable %13 Output
%15 = OpTypePointer Input %5
%17 = OpConstant %6 0
%20 = OpConstant %6 1
%24 = OpConstant %6 2
%27 = OpTypePointer Output %5
%29 = OpTypePointer Input %6
%30 = OpVariable %29 Input
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %32
%32 = OpLabel
%16 = OpAccessChain %15 %10 %17
%18 = OpLoad %5 %16
%19 = OpAccessChain %15 %10 %20
%21 = OpLoad %5 %19
%22 = OpFAdd %5 %21 %18
%23 = OpAccessChain %15 %10 %24
%25 = OpLoad %5 %23
%26 = OpFAdd %5 %22 %25
%31 = OpLoad %6 %30
%28 = OpAccessChain %27 %14 %31
OpStore %28 %26
OpReturn
OpFunctionEnd
#endif