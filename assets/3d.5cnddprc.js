import{F as t}from"./FullscreenDisplay.75rpamat.js";import{M as o}from"./MovableCanvas2d.4z89ub4m.js";import{d as i,r as a,j as n,c as r,w as c,o as s,a as l}from"./index.xh0zaea0.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./CoordinateCanvas2d.4rt8wdf9.js";import"./useOption.1pf10ib0.js";import"./WebGlCanvas.5wwm3cvm.js";const v=`
  uniform vec2 u_resolution;
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 us_scale;
  uniform vec2 us_offset;
  uniform float time;

  const int detail = 100;
  const float epsilon = 0.0001;
  const float min_dist = 0.0;
  const float max_dist = 100.0;
  const float scale = 1.0;

  vec4 mult(vec4 a, vec4 b) {
    return vec4(
      (a.w * b.x) + (a.x * b.w) + (a.y * b.z) - (a.z * b.y),
      (a.w * b.y) - (a.x * b.z) + (a.y * b.w) + (a.z * b.x),
      (a.w * b.z) + (a.x * b.y) - (a.y * b.x) + (a.z * b.w),
      (a.w * b.w) - (a.x * b.x) - (a.y * b.y) - (a.z * b.z)
    );
  }

  float cube(vec3 point, vec3 center, float size) {
    vec3 d = abs(point - center) - vec3(size / 2.0);
    float insideDistance = min(max(d.x, max(d.y, d.z)), 0.0);
    float outsideDistance = length(max(d, 0.0));
    return insideDistance + outsideDistance;
  }

  float sphere(vec3 point, vec3 center, float radius) {
    return length(point - center) - radius;
  }

  float mandelbulb(vec3 point) {
    vec3 z = point;
    float power = 2.0;
    float dr = 1.0;
    float r;

    for (int i = 0; i < 50; i++) {
      r = length(z);
      if (r > 2.0) break;

      float theta = acos(z.z / r) * power;
      float phi = atan(z.y, z.x) * power;
      float zr = pow(r, power);
      dr = pow(r, power - 1.0) * power * dr + 1.0;

      z = zr * vec3(sin(theta) * cos(phi), sin(phi) * sin(theta), cos(theta));
      z += point;
    }

    return 0.5 * log(r) * r / dr;
  }

  float DE(vec3 point) {
    return mandelbulb(point);

    return max(
      cube(point, vec3(0.0), min(u_scale.x, u_scale.y)),
      -sphere(point, vec3(0.1, -0.1, 0.0), min(u_scale.x, u_scale.y) * 0.6)
    );
  }

  vec3 estimateNormal(vec3 point) {
    return normalize(vec3(
        DE(vec3(point.x + epsilon, point.y, point.z)) - DE(vec3(point.x - epsilon, point.y, point.z)),
        DE(vec3(point.x, point.y + epsilon, point.z)) - DE(vec3(point.x, point.y - epsilon, point.z)),
        DE(vec3(point.x, point.y, point.z + epsilon)) - DE(vec3(point.x, point.y, point.z - epsilon))
    ));
  }

  float shortestDistanceToSurface(vec3 camera, vec3 dir, float start, float end) {
    float depth = start;

    for (int i = 0; i < detail; i++) {
      float dist = DE(camera + depth * dir);
      if (dist < epsilon) return depth;

      depth += dist;
      if (depth >= end) return end;
    }

    return end;
  }

  vec3 rayDirection(float fieldOfView, vec2 size) {
    vec2 xy = gl_FragCoord.xy - size / 2.0;
    float point = size.y / tan(radians(fieldOfView) / 2.0);
    return normalize(vec3(xy, -point));
  }

  vec3 phongContribForLight(
    vec3 k_d, vec3 k_s, float alpha, vec3 point,
    vec3 camera, vec3 lightPos, vec3 lightIntensity
  ) {
    vec3 N = estimateNormal(point);
    vec3 L = normalize(lightPos - point);
    vec3 V = normalize(camera - point);
    vec3 R = normalize(reflect(-L, N));

    float dotLN = dot(L, N);
    float dotRV = dot(R, V);

    if (dotLN < 0.0) {
      return vec3(0.0, 0.0, 0.0);
    }

    if (dotRV < 0.0) {
      return lightIntensity * k_d * dotLN;
    }

    return lightIntensity * (k_d * dotLN + k_s * pow(dotRV, alpha));
}

  vec3 phongIllumination(vec3 k_a, vec3 k_d, vec3 k_s, float alpha, vec3 point, vec3 camera) {
    const vec3 ambientLight = vec3(0.5);
    vec3 color = ambientLight * k_a;

    {
      vec3 position = camera;
      vec3 intensity = vec3(0.5);

      color += phongContribForLight(
        k_d, k_s, alpha, mod(point, 10.0), camera,
        position, intensity
      );
    }

    return color;
  }

  mat4 viewMatrix(vec3 camera, vec3 center, vec3 up) {
    vec3 f = normalize(center - camera);
    vec3 s = normalize(cross(f, up));
    vec3 u = cross(s, f);

    return mat4(
      vec4(s, 0.0),
      vec4(u, 0.0),
      vec4(-f, 0.0),
      vec4(0.0, 0.0, 0.0, 1)
    );
  }

  void main() {
    vec2 center = 0.5 * u_scale + u_offset;
	  vec3 dir = rayDirection(45.0, u_resolution);
    vec2 cam = -4.0 * vec2(sin(center.x), cos(center.x));
    vec3 camera = vec3(cam.x, 0.0, cam.y);

    mat4 viewToWorld = viewMatrix(camera, vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0));
    dir = (viewToWorld * vec4(dir, 0.0)).xyz;

    float dist = shortestDistanceToSurface(camera, dir, min_dist, max_dist);

    if (dist > max_dist - epsilon) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
		  return;
    }

    vec3 point = camera + dist * dir;

    vec3 K_a = vec3(0.4);
    vec3 K_d = vec3(0.7, 0.2, 0.2);
    vec3 K_s = vec3(1.0, 1.0, 1.0);
    float shininess = 10.0;

    vec3 color = phongIllumination(K_a, K_d, K_s, shininess, point, camera);
    gl_FragColor = vec4(color, 1.0);
  }`,k=i({__name:"3d",setup(p){const e=a();return n(()=>{e.value&&new o(e.value,{fragmentString:v,bounds:{xStart:2.1,xEnd:3,yStart:2.5,yEnd:3.5}})}),(d,m)=>(s(),r(t,null,{default:c(()=>[l("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{k as default};
