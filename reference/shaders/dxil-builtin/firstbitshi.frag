#version 460

layout(location = 0) flat in int A;
layout(location = 0) out int SV_Target;

void main()
{
    uint _14 = uint(findMSB(int(uint(A))));
    uint _20 = (_14 == 4294967295u) ? 4294967295u : (31u - _14);
    SV_Target = int((_20 == 4294967295u) ? 4294967295u : (31u - _20));
}


#if 0
// LLVM disassembly
target datalayout = "e-m:e-p:32:32-i1:32-i8:32-i16:32-i32:32-i64:64-f16:32-f32:32-f64:64-n8:16:32:64"
target triple = "dxil-ms-dx"

define void @main() {
  %1 = call i32 @dx.op.loadInput.i32(i32 4, i32 0, i32 0, i8 0, i32 undef)
  %2 = call i32 @dx.op.unaryBits.i32(i32 34, i32 %1)
  %3 = sub i32 31, %2
  %4 = icmp eq i32 %2, -1
  %5 = select i1 %4, i32 -1, i32 %3
  call void @dx.op.storeOutput.i32(i32 5, i32 0, i32 0, i8 0, i32 %5)
  ret void
}

; Function Attrs: nounwind readnone
declare i32 @dx.op.loadInput.i32(i32, i32, i32, i8, i32) #0

; Function Attrs: nounwind
declare void @dx.op.storeOutput.i32(i32, i32, i32, i8, i32) #1

; Function Attrs: nounwind readnone
declare i32 @dx.op.unaryBits.i32(i32, i32) #0

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
!3 = !{!"ps", i32 6, i32 0}
!4 = !{[3 x i32] [i32 1, i32 1, i32 1]}
!5 = !{void ()* @main, !"main", !6, null, null}
!6 = !{!7, !11, null}
!7 = !{!8}
!8 = !{i32 0, !"A", i8 4, i8 0, !9, i8 1, i32 1, i8 1, i32 0, i8 0, !10}
!9 = !{i32 0}
!10 = !{i32 3, i32 1}
!11 = !{!12}
!12 = !{i32 0, !"SV_Target", i8 4, i8 16, !9, i8 0, i32 1, i8 1, i32 0, i8 0, !10}
#endif
#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 27
; Schema: 0
OpCapability Shader
%13 = OpExtInstImport "GLSL.std.450"
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %3 "main" %7 %9
OpExecutionMode %3 OriginUpperLeft
OpName %3 "main"
OpName %7 "A"
OpName %9 "SV_Target"
OpDecorate %7 Flat
OpDecorate %7 Location 0
OpDecorate %9 Location 0
%1 = OpTypeVoid
%2 = OpTypeFunction %1
%5 = OpTypeInt 32 1
%6 = OpTypePointer Input %5
%7 = OpVariable %6 Input
%8 = OpTypePointer Output %5
%9 = OpVariable %8 Output
%12 = OpTypeInt 32 0
%16 = OpTypeBool
%17 = OpConstant %12 4294967295
%19 = OpConstant %12 31
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %25
%25 = OpLabel
%10 = OpLoad %5 %7
%11 = OpBitcast %12 %10
%14 = OpExtInst %12 %13 FindSMsb %11
%15 = OpIEqual %16 %14 %17
%18 = OpISub %12 %19 %14
%20 = OpSelect %12 %15 %17 %18
%21 = OpISub %12 %19 %20
%22 = OpIEqual %16 %20 %17
%23 = OpSelect %12 %22 %17 %21
%24 = OpBitcast %5 %23
OpStore %9 %24
OpReturn
OpFunctionEnd
#endif