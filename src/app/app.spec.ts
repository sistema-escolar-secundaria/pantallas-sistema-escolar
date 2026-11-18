import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { DemoSession } from './core/services/demo-session';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    });
    TestBed.inject(DemoSession).end();
  });

  afterEach(() => TestBed.inject(DemoSession).end());

  it('renders the router outlet', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });

  it('sends a visitor without a session to the demo login', async () => {
    const harness = await RouterTestingHarness.create('/admin/estudiantes');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Iniciar sesión');
  });

  it('redirects an active session to its own panel when a different profile is requested', async () => {
    TestBed.inject(DemoSession).start('docente');
    const harness = await RouterTestingHarness.create('/alumno/boleta');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Panel docente');
  });
});
