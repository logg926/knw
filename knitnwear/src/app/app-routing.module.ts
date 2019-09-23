import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // }, 
  {
    path: '',
    redirectTo: 'withsize/216/194/1.105/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    // path: 'withsize/:width/:height/:ratio',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,useHash:true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
