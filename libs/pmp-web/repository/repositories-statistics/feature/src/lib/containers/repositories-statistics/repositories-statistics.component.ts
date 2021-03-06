import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RepositoriesStatisticsFacade } from '@pimp-my-pr/pmp-web/repository/repositories-statistics/data-access';
import { RepositoryStatistics } from '@pimp-my-pr/shared/domain';
import { RepositoriesStatisticsPresenter } from './repositories-statistics.presenter';

@Component({
  selector: 'pmp-repositories-statistics',
  templateUrl: './repositories-statistics.component.html',
  styleUrls: ['./repositories-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RepositoriesStatisticsPresenter]
})
export class RepositoriesStatisticsComponent implements OnInit {
  repositoryStatisticsCollection$ = this.repositoryStatisticsFacade.repositoryStatisticsCollection$;
  repositoryStatisticsCollectionLoading$ = this.repositoryStatisticsFacade
    .repositoryStatisticsCollectionLoading$;

  constructor(
    private repositoryStatisticsFacade: RepositoriesStatisticsFacade,
    private repositoriesStatisticsPresenter: RepositoriesStatisticsPresenter
  ) {}

  ngOnInit(): void {
    this.repositoryStatisticsFacade.getRepositoryStatisticsCollection();
  }

  onNavigateToRepository(repository: RepositoryStatistics): void {
    this.repositoriesStatisticsPresenter.navigateToRepository(repository);
  }
}
