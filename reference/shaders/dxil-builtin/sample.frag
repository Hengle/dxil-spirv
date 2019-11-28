#version 460

layout(set = 1, binding = 0) uniform texture1D Tex1D;
layout(set = 1, binding = 1) uniform texture1DArray Tex1DArray;
layout(set = 1, binding = 2) uniform texture2D Tex2D;
layout(set = 1, binding = 3) uniform texture2DArray Tex2DArray;
layout(set = 1, binding = 4) uniform texture3D Tex3D;
layout(set = 1, binding = 5) uniform textureCube TexCube;
layout(set = 1, binding = 6) uniform textureCubeArray TexCubeArray;
layout(set = 0, binding = 0) uniform sampler Samp;

layout(location = 0) in vec4 TEXCOORD;
layout(location = 0) out vec2 SV_Target;

void main()
{
    vec4 _63 = texture(sampler1D(Tex1D, Samp), TEXCOORD.x);
    vec4 _69 = texture(sampler1DArray(Tex1DArray, Samp), vec2(TEXCOORD.x, TEXCOORD.y));
    float _71 = _69.x;
    vec4 _75 = texture(sampler1DArray(Tex1DArray, Samp), vec2(TEXCOORD.x, TEXCOORD.y));
    float _77 = _75.x;
    vec4 _83 = texture(sampler2D(Tex2D, Samp), vec2(TEXCOORD.x, TEXCOORD.y));
    vec4 _92 = texture(sampler2DArray(Tex2DArray, Samp), vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z));
    float _95 = _92.x;
    vec4 _101 = texture(sampler3D(Tex3D, Samp), vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z));
    vec4 _110 = texture(samplerCube(TexCube, Samp), vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z));
    vec4 _119 = texture(samplerCubeArray(TexCubeArray, Samp), vec4(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z, TEXCOORD.w));
    float _121 = _119.x;
    SV_Target.x = ((((((_71 + _63.x) + _77) + _83.x) + _95) + _101.x) + _110.x) + _121;
    SV_Target.y = ((((((_71 + _63.y) + _77) + _83.y) + _95) + _101.y) + _110.y) + _121;
}


#if 0
// LLVM disassembly
target datalayout = "e-m:e-p:32:32-i1:32-i8:32-i16:32-i32:32-i64:64-f16:32-f32:32-f64:64-n8:16:32:64"
target triple = "dxil-ms-dx"

%"class.Texture1D<vector<float, 2> >" = type { <2 x float>, %"class.Texture1D<vector<float, 2> >::mips_type" }
%"class.Texture1D<vector<float, 2> >::mips_type" = type { i32 }
%"class.Texture1DArray<float>" = type { float, %"class.Texture1DArray<float>::mips_type" }
%"class.Texture1DArray<float>::mips_type" = type { i32 }
%"class.Texture2D<vector<float, 2> >" = type { <2 x float>, %"class.Texture2D<vector<float, 2> >::mips_type" }
%"class.Texture2D<vector<float, 2> >::mips_type" = type { i32 }
%"class.Texture2DArray<float>" = type { float, %"class.Texture2DArray<float>::mips_type" }
%"class.Texture2DArray<float>::mips_type" = type { i32 }
%"class.Texture3D<vector<float, 2> >" = type { <2 x float>, %"class.Texture3D<vector<float, 2> >::mips_type" }
%"class.Texture3D<vector<float, 2> >::mips_type" = type { i32 }
%"class.TextureCube<vector<float, 2> >" = type { <2 x float> }
%"class.TextureCubeArray<float>" = type { float }
%struct.SamplerState = type { i32 }
%dx.types.Handle = type { i8* }
%dx.types.ResRet.f32 = type { float, float, float, float, i32 }

@"\01?Tex1D@@3V?$Texture1D@V?$vector@M$01@@@@A" = external constant %"class.Texture1D<vector<float, 2> >", align 4
@"\01?Tex1DArray@@3V?$Texture1DArray@M@@A" = external constant %"class.Texture1DArray<float>", align 4
@"\01?Tex2D@@3V?$Texture2D@V?$vector@M$01@@@@A" = external constant %"class.Texture2D<vector<float, 2> >", align 4
@"\01?Tex2DArray@@3V?$Texture2DArray@M@@A" = external constant %"class.Texture2DArray<float>", align 4
@"\01?Tex3D@@3V?$Texture3D@V?$vector@M$01@@@@A" = external constant %"class.Texture3D<vector<float, 2> >", align 4
@"\01?TexCube@@3V?$TextureCube@V?$vector@M$01@@@@A" = external constant %"class.TextureCube<vector<float, 2> >", align 4
@"\01?TexCubeArray@@3V?$TextureCubeArray@M@@A" = external constant %"class.TextureCubeArray<float>", align 4
@"\01?Samp@@3USamplerState@@A" = external constant %struct.SamplerState, align 4

define void @main() {
  %TexCubeArray_texture_cubearray = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 6, i32 6, i1 false)
  %TexCube_texture_cube = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 5, i32 5, i1 false)
  %Tex3D_texture_3d = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 4, i32 4, i1 false)
  %Tex2DArray_texture_2darray = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 3, i32 3, i1 false)
  %Tex2D_texture_2d = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 2, i32 2, i1 false)
  %Tex1DArray_texture_1darray = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 1, i32 1, i1 false)
  %Tex1D_texture_1d = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 0, i32 0, i32 0, i1 false)
  %Samp_sampler = call %dx.types.Handle @dx.op.createHandle(i32 57, i8 3, i32 0, i32 0, i1 false)
  %1 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 0, i32 undef)
  %2 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 1, i32 undef)
  %3 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 2, i32 undef)
  %4 = call float @dx.op.loadInput.f32(i32 4, i32 0, i32 0, i8 3, i32 undef)
  %5 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %Tex1D_texture_1d, %dx.types.Handle %Samp_sampler, float %1, float undef, float undef, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %6 = extractvalue %dx.types.ResRet.f32 %5, 0
  %7 = extractvalue %dx.types.ResRet.f32 %5, 1
  %8 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %Tex1DArray_texture_1darray, %dx.types.Handle %Samp_sampler, float %1, float %2, float undef, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %9 = extractvalue %dx.types.ResRet.f32 %8, 0
  %.i0 = fadd fast float %9, %6
  %.i1 = fadd fast float %9, %7
  %10 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %Tex1DArray_texture_1darray, %dx.types.Handle %Samp_sampler, float %1, float %2, float undef, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %11 = extractvalue %dx.types.ResRet.f32 %10, 0
  %.i01 = fadd fast float %.i0, %11
  %.i12 = fadd fast float %.i1, %11
  %12 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %Tex2D_texture_2d, %dx.types.Handle %Samp_sampler, float %1, float %2, float undef, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %13 = extractvalue %dx.types.ResRet.f32 %12, 0
  %14 = extractvalue %dx.types.ResRet.f32 %12, 1
  %.i03 = fadd fast float %.i01, %13
  %.i14 = fadd fast float %.i12, %14
  %15 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %Tex2DArray_texture_2darray, %dx.types.Handle %Samp_sampler, float %1, float %2, float %3, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %16 = extractvalue %dx.types.ResRet.f32 %15, 0
  %.i05 = fadd fast float %.i03, %16
  %.i16 = fadd fast float %.i14, %16
  %17 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %Tex3D_texture_3d, %dx.types.Handle %Samp_sampler, float %1, float %2, float %3, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %18 = extractvalue %dx.types.ResRet.f32 %17, 0
  %19 = extractvalue %dx.types.ResRet.f32 %17, 1
  %.i07 = fadd fast float %.i05, %18
  %.i18 = fadd fast float %.i16, %19
  %20 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %TexCube_texture_cube, %dx.types.Handle %Samp_sampler, float %1, float %2, float %3, float undef, i32 undef, i32 undef, i32 undef, float undef)
  %21 = extractvalue %dx.types.ResRet.f32 %20, 0
  %22 = extractvalue %dx.types.ResRet.f32 %20, 1
  %.i09 = fadd fast float %.i07, %21
  %.i110 = fadd fast float %.i18, %22
  %23 = call %dx.types.ResRet.f32 @dx.op.sample.f32(i32 60, %dx.types.Handle %TexCubeArray_texture_cubearray, %dx.types.Handle %Samp_sampler, float %1, float %2, float %3, float %4, i32 undef, i32 undef, i32 undef, float undef)
  %24 = extractvalue %dx.types.ResRet.f32 %23, 0
  %.i011 = fadd fast float %.i09, %24
  %.i112 = fadd fast float %.i110, %24
  call void @dx.op.storeOutput.f32(i32 5, i32 0, i32 0, i8 0, float %.i011)
  call void @dx.op.storeOutput.f32(i32 5, i32 0, i32 0, i8 1, float %.i112)
  ret void
}

; Function Attrs: nounwind readnone
declare float @dx.op.loadInput.f32(i32, i32, i32, i8, i32) #0

; Function Attrs: nounwind
declare void @dx.op.storeOutput.f32(i32, i32, i32, i8, float) #1

; Function Attrs: nounwind readonly
declare %dx.types.ResRet.f32 @dx.op.sample.f32(i32, %dx.types.Handle, %dx.types.Handle, float, float, float, float, i32, i32, i32, float) #2

; Function Attrs: nounwind readonly
declare %dx.types.Handle @dx.op.createHandle(i32, i8, i32, i32, i1) #2

attributes #0 = { nounwind readnone }
attributes #1 = { nounwind }
attributes #2 = { nounwind readonly }

!llvm.ident = !{!0}
!dx.version = !{!1}
!dx.valver = !{!2}
!dx.shaderModel = !{!3}
!dx.resources = !{!4}
!dx.typeAnnotations = !{!16, !24}
!dx.viewIdState = !{!28}
!dx.entryPoints = !{!29}

!0 = !{!"dxcoob 2019.05.00"}
!1 = !{i32 1, i32 0}
!2 = !{i32 1, i32 4}
!3 = !{!"ps", i32 6, i32 0}
!4 = !{!5, null, null, !14}
!5 = !{!6, !8, !9, !10, !11, !12, !13}
!6 = !{i32 0, %"class.Texture1D<vector<float, 2> >"* undef, !"Tex1D", i32 1, i32 0, i32 1, i32 1, i32 0, !7}
!7 = !{i32 0, i32 9}
!8 = !{i32 1, %"class.Texture1DArray<float>"* undef, !"Tex1DArray", i32 1, i32 1, i32 1, i32 6, i32 0, !7}
!9 = !{i32 2, %"class.Texture2D<vector<float, 2> >"* undef, !"Tex2D", i32 1, i32 2, i32 1, i32 2, i32 0, !7}
!10 = !{i32 3, %"class.Texture2DArray<float>"* undef, !"Tex2DArray", i32 1, i32 3, i32 1, i32 7, i32 0, !7}
!11 = !{i32 4, %"class.Texture3D<vector<float, 2> >"* undef, !"Tex3D", i32 1, i32 4, i32 1, i32 4, i32 0, !7}
!12 = !{i32 5, %"class.TextureCube<vector<float, 2> >"* undef, !"TexCube", i32 1, i32 5, i32 1, i32 5, i32 0, !7}
!13 = !{i32 6, %"class.TextureCubeArray<float>"* undef, !"TexCubeArray", i32 1, i32 6, i32 1, i32 9, i32 0, !7}
!14 = !{!15}
!15 = !{i32 0, %struct.SamplerState* undef, !"Samp", i32 0, i32 0, i32 1, i32 0, null}
!16 = !{i32 0, %"class.Texture1D<vector<float, 2> >" undef, !17, %"class.Texture1D<vector<float, 2> >::mips_type" undef, !20, %"class.Texture1DArray<float>" undef, !17, %"class.Texture1DArray<float>::mips_type" undef, !20, %"class.Texture2D<vector<float, 2> >" undef, !17, %"class.Texture2D<vector<float, 2> >::mips_type" undef, !20, %"class.Texture2DArray<float>" undef, !17, %"class.Texture2DArray<float>::mips_type" undef, !20, %"class.Texture3D<vector<float, 2> >" undef, !17, %"class.Texture3D<vector<float, 2> >::mips_type" undef, !20, %"class.TextureCube<vector<float, 2> >" undef, !22, %"class.TextureCubeArray<float>" undef, !23}
!17 = !{i32 20, !18, !19}
!18 = !{i32 6, !"h", i32 3, i32 0, i32 7, i32 9}
!19 = !{i32 6, !"mips", i32 3, i32 16}
!20 = !{i32 4, !21}
!21 = !{i32 6, !"handle", i32 3, i32 0, i32 7, i32 5}
!22 = !{i32 8, !18}
!23 = !{i32 4, !18}
!24 = !{i32 1, void ()* @main, !25}
!25 = !{!26}
!26 = !{i32 0, !27, !27}
!27 = !{}
!28 = !{[6 x i32] [i32 4, i32 2, i32 3, i32 3, i32 3, i32 3]}
!29 = !{void ()* @main, !"main", !30, !4, null}
!30 = !{!31, !34, null}
!31 = !{!32}
!32 = !{i32 0, !"TEXCOORD", i8 9, i8 0, !33, i8 2, i32 1, i8 4, i32 0, i8 0, null}
!33 = !{i32 0}
!34 = !{!35}
!35 = !{i32 0, !"SV_Target", i8 9, i8 16, !33, i8 0, i32 1, i8 2, i32 0, i8 0, null}
#endif
#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 129
; Schema: 0
OpCapability Shader
OpCapability ImageCubeArray
OpCapability Sampled1D
OpCapability Image1D
OpCapability SampledCubeArray
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %3 "main" %32 %35
OpExecutionMode %3 OriginUpperLeft
OpName %3 "main"
OpName %8 "Tex1D"
OpName %11 "Tex1DArray"
OpName %14 "Tex2D"
OpName %17 "Tex2DArray"
OpName %20 "Tex3D"
OpName %23 "TexCube"
OpName %26 "TexCubeArray"
OpName %29 "Samp"
OpName %32 "TEXCOORD"
OpName %35 "SV_Target"
OpDecorate %8 DescriptorSet 1
OpDecorate %8 Binding 0
OpDecorate %11 DescriptorSet 1
OpDecorate %11 Binding 1
OpDecorate %14 DescriptorSet 1
OpDecorate %14 Binding 2
OpDecorate %17 DescriptorSet 1
OpDecorate %17 Binding 3
OpDecorate %20 DescriptorSet 1
OpDecorate %20 Binding 4
OpDecorate %23 DescriptorSet 1
OpDecorate %23 Binding 5
OpDecorate %26 DescriptorSet 1
OpDecorate %26 Binding 6
OpDecorate %29 DescriptorSet 0
OpDecorate %29 Binding 0
OpDecorate %32 Location 0
OpDecorate %35 Location 0
%1 = OpTypeVoid
%2 = OpTypeFunction %1
%5 = OpTypeFloat 32
%6 = OpTypeImage %5 1D 0 0 0 1 Unknown
%7 = OpTypePointer UniformConstant %6
%8 = OpVariable %7 UniformConstant
%9 = OpTypeImage %5 1D 0 1 0 1 Unknown
%10 = OpTypePointer UniformConstant %9
%11 = OpVariable %10 UniformConstant
%12 = OpTypeImage %5 2D 0 0 0 1 Unknown
%13 = OpTypePointer UniformConstant %12
%14 = OpVariable %13 UniformConstant
%15 = OpTypeImage %5 2D 0 1 0 1 Unknown
%16 = OpTypePointer UniformConstant %15
%17 = OpVariable %16 UniformConstant
%18 = OpTypeImage %5 3D 0 0 0 1 Unknown
%19 = OpTypePointer UniformConstant %18
%20 = OpVariable %19 UniformConstant
%21 = OpTypeImage %5 Cube 0 0 0 1 Unknown
%22 = OpTypePointer UniformConstant %21
%23 = OpVariable %22 UniformConstant
%24 = OpTypeImage %5 Cube 0 1 0 1 Unknown
%25 = OpTypePointer UniformConstant %24
%26 = OpVariable %25 UniformConstant
%27 = OpTypeSampler
%28 = OpTypePointer UniformConstant %27
%29 = OpVariable %28 UniformConstant
%30 = OpTypeVector %5 4
%31 = OpTypePointer Input %30
%32 = OpVariable %31 Input
%33 = OpTypeVector %5 2
%34 = OpTypePointer Output %33
%35 = OpVariable %34 Output
%45 = OpTypePointer Input %5
%46 = OpTypeInt 32 0
%47 = OpConstant %46 0
%50 = OpConstant %46 1
%53 = OpConstant %46 2
%56 = OpConstant %46 3
%58 = OpTypeImage %5 1D 0 0 0 2 Unknown
%60 = OpTypeSampledImage %58
%61 = OpTypeInt 32 1
%62 = OpConstant %61 0
%66 = OpTypeImage %5 1D 0 1 0 2 Unknown
%68 = OpTypeSampledImage %66
%80 = OpTypeImage %5 2D 0 0 0 2 Unknown
%82 = OpTypeSampledImage %80
%89 = OpTypeImage %5 2D 0 1 0 2 Unknown
%91 = OpTypeSampledImage %89
%94 = OpTypeVector %5 3
%98 = OpTypeImage %5 3D 0 0 0 2 Unknown
%100 = OpTypeSampledImage %98
%107 = OpTypeImage %5 Cube 0 0 0 2 Unknown
%109 = OpTypeSampledImage %107
%116 = OpTypeImage %5 Cube 0 1 0 2 Unknown
%118 = OpTypeSampledImage %116
%125 = OpTypePointer Output %5
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %127
%127 = OpLabel
%36 = OpLoad %24 %26
%37 = OpLoad %21 %23
%38 = OpLoad %18 %20
%39 = OpLoad %15 %17
%40 = OpLoad %12 %14
%41 = OpLoad %9 %11
%42 = OpLoad %6 %8
%43 = OpLoad %27 %29
%44 = OpInBoundsAccessChain %45 %32 %47
%48 = OpLoad %5 %44
%49 = OpInBoundsAccessChain %45 %32 %50
%51 = OpLoad %5 %49
%52 = OpInBoundsAccessChain %45 %32 %53
%54 = OpLoad %5 %52
%55 = OpInBoundsAccessChain %45 %32 %56
%57 = OpLoad %5 %55
%59 = OpSampledImage %60 %42 %43
%63 = OpImageSampleImplicitLod %30 %59 %48 None
%64 = OpCompositeExtract %5 %63 0
%65 = OpCompositeExtract %5 %63 1
%67 = OpSampledImage %68 %41 %43
%70 = OpCompositeConstruct %33 %48 %51
%69 = OpImageSampleImplicitLod %30 %67 %70 None
%71 = OpCompositeExtract %5 %69 0
%72 = OpFAdd %5 %71 %64
%73 = OpFAdd %5 %71 %65
%74 = OpSampledImage %68 %41 %43
%76 = OpCompositeConstruct %33 %48 %51
%75 = OpImageSampleImplicitLod %30 %74 %76 None
%77 = OpCompositeExtract %5 %75 0
%78 = OpFAdd %5 %72 %77
%79 = OpFAdd %5 %73 %77
%81 = OpSampledImage %82 %40 %43
%84 = OpCompositeConstruct %33 %48 %51
%83 = OpImageSampleImplicitLod %30 %81 %84 None
%85 = OpCompositeExtract %5 %83 0
%86 = OpCompositeExtract %5 %83 1
%87 = OpFAdd %5 %78 %85
%88 = OpFAdd %5 %79 %86
%90 = OpSampledImage %91 %39 %43
%93 = OpCompositeConstruct %94 %48 %51 %54
%92 = OpImageSampleImplicitLod %30 %90 %93 None
%95 = OpCompositeExtract %5 %92 0
%96 = OpFAdd %5 %87 %95
%97 = OpFAdd %5 %88 %95
%99 = OpSampledImage %100 %38 %43
%102 = OpCompositeConstruct %94 %48 %51 %54
%101 = OpImageSampleImplicitLod %30 %99 %102 None
%103 = OpCompositeExtract %5 %101 0
%104 = OpCompositeExtract %5 %101 1
%105 = OpFAdd %5 %96 %103
%106 = OpFAdd %5 %97 %104
%108 = OpSampledImage %109 %37 %43
%111 = OpCompositeConstruct %94 %48 %51 %54
%110 = OpImageSampleImplicitLod %30 %108 %111 None
%112 = OpCompositeExtract %5 %110 0
%113 = OpCompositeExtract %5 %110 1
%114 = OpFAdd %5 %105 %112
%115 = OpFAdd %5 %106 %113
%117 = OpSampledImage %118 %36 %43
%120 = OpCompositeConstruct %30 %48 %51 %54 %57
%119 = OpImageSampleImplicitLod %30 %117 %120 None
%121 = OpCompositeExtract %5 %119 0
%122 = OpFAdd %5 %114 %121
%123 = OpFAdd %5 %115 %121
%124 = OpInBoundsAccessChain %125 %35 %47
OpStore %124 %122
%126 = OpInBoundsAccessChain %125 %35 %50
OpStore %126 %123
OpReturn
OpFunctionEnd
#endif