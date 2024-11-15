import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestViewComponent } from './components/test-view/test-view.component';

const routes: Routes = [
  { path: 'test', component: TestViewComponent },
  { path: '**', redirectTo: 'test' } // Fallback auf Testansicht
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
